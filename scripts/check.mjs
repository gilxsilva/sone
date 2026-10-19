import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const dir = await mkdtemp(join(tmpdir(), 'sone-check-'));
try {
  for (const name of ['dictionary', 'symbols-es', 'translations']) {
    const source = await readFile(new URL(`../src/${name}.ts`, import.meta.url), 'utf8');
    const output = ts
      .transpileModule(source, {
        compilerOptions: { module: ts.ModuleKind.ES2022, target: ts.ScriptTarget.ES2020 },
      })
      .outputText.replaceAll("'./symbols-es'", "'./symbols-es.mjs'");
    await writeFile(join(dir, `${name}.mjs`), output);
  }
  const { dictionary, getDictionary, findSymbols, makeReading, dreamMood, shareReading } =
    await import(pathToFileURL(join(dir, 'dictionary.mjs')));
  const { es } = await import(pathToFileURL(join(dir, 'translations.mjs')));
  assert.equal(dictionary.length, 32);
  assert.equal(new Set(dictionary.map((s) => s.id)).size, 32);
  for (const entry of getDictionary('es')) {
    for (const field of ['name', 'subtitle', 'folklore', 'reflection', 'question', 'theme'])
      assert(entry[field]?.trim(), `${entry.id}.${field} needs Spanish`);
  }
  assert.deepEqual(
    findSymbols('I saw a carpet in a seasonal carousel.').map((s) => s.id),
    [],
  );
  assert.deepEqual(
    findSymbols('A dog on a bridge beside a boat.').map((s) => s.id),
    ['dog', 'bridge', 'boat'],
  );
  assert.deepEqual(
    findSymbols('Un perro, una araña y un árbol.', 'es').map((s) => s.id),
    ['dog', 'spider', 'tree'],
  );
  assert.equal(dreamMood('No tenía miedo. Sentía mucha calma.', 'Let the words lead'), 'Peaceful');
  assert.equal(dreamMood('I felt calm.', 'Uneasy'), 'Uneasy');
  const dream = 'Un perro me esperaba al cruzar un puente. Sentía calma.';
  const spanish = makeReading(dream, 'Let the words lead', 'es');
  assert.match(spanish.title, /perros.*puentes/);
  assert.match(spanish.summary, /Una forma/);
  assert.equal(spanish.mood, 'Peaceful');
  assert(!shareReading(spanish, dream, false, 'es').includes('El sueño:'));
  assert(shareReading(spanish, dream, true, 'es').includes('El sueño: ' + dream));
  assert.equal(makeReading('A purple hologram.', 'Curious').symbols.length, 0);
  assert.match(makeReading('A purple hologram.', 'Curious', 'es').summary, /no coincide/);
  for (const entry of dictionary.filter((s) => s.source)) {
    assert.equal(new URL(entry.source.url).protocol, 'https:');
  }
  assert.equal(es['Copy reading'], 'Copiar lectura');
  console.log(
    'Passed: 32 bilingual entries, unique IDs, exact matching, accented Spanish, match order, moods, Spanish readings, sharing opt-in, unknown dreams, and source URLs.',
  );
} finally {
  await rm(dir, { recursive: true, force: true });
}
