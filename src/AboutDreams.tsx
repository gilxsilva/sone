import { useI18n } from './i18n';
import { getDictionary } from './dictionary';

export function AboutDreams() {
  const { lang } = useI18n();
  const es = lang === 'es';
  const research = es
    ? [
        [
          '01',
          'El sueño tiene etapas.',
          'El NHLBI describe etapas de sueño REM y no REM que se alternan durante la noche. Esta información explica el contexto del sueño, no el significado de sus imágenes.',
          'NHLBI · Etapas del sueño',
          'https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep',
        ],
        [
          '02',
          'La vida despierta puede aparecer.',
          'En un estudio de 2021 con 343 participantes, algunos sueños incorporaron detalles del laboratorio donde durmieron. Esto muestra una conexión con experiencias recientes; no demuestra que un símbolo tenga un significado universal.',
          'Picard-Deland, Nielsen & Carr · PLOS ONE, 2021',
          'https://pubmed.ncbi.nlm.nih.gov/34614021/',
        ],
        [
          '03',
          'Una definición no es un código.',
          'La APA ofrece una definición de sueño. La citamos para aclarar el término, no como respaldo de nuestras lecturas de serpientes, agua o cualquier otro símbolo.',
          'APA Dictionary · Dream',
          'https://dictionary.apa.org/dream',
        ],
      ]
    : [
        [
          '01',
          'Sleep has stages.',
          'The NHLBI describes REM and non-REM sleep stages that alternate through the night. This explains the setting for dreams, rather than the meaning of their imagery.',
          'NHLBI · Stages of sleep',
          'https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep',
        ],
        [
          '02',
          'Waking life can find its way in.',
          'In a 2021 study of 343 participants, some dreams incorporated details of the sleep laboratory. This shows a connection with recent experience; it does not establish a universal meaning for a symbol.',
          'Picard-Deland, Nielsen & Carr · PLOS ONE, 2021',
          'https://pubmed.ncbi.nlm.nih.gov/34614021/',
        ],
        [
          '03',
          'A definition is not a decoder.',
          'The APA provides a definition of dreaming. We cite it to explain the term, rather than to endorse our readings of snakes, water or any other symbol.',
          'APA Dictionary · Dream',
          'https://dictionary.apa.org/dream',
        ],
      ];
  return (
    <section className="about-dreams page-width">
      <header className="science-intro">
        <span className="eyebrow">
          {es ? 'CURIOSIDAD, CON LOS PIES EN LA TIERRA' : 'CURIOSITY, WITH OUR FEET ON THE GROUND'}
        </span>
        <h1>
          {es ? 'Un poco de asombro. Un poco de contexto.' : 'A little wonder. A little context.'}
        </h1>
        <p>
          {es
            ? 'Los sueños merecen curiosidad. También mereces saber qué viene de la investigación, qué viene de un diccionario simbólico y qué imaginamos nosotros.'
            : 'Dreams deserve curiosity. You deserve to know what comes from research, what comes from a symbolic dictionary, and what we imagined ourselves.'}
        </p>
      </header>
      <div className="evidence-strip">
        <div>
          <span>01 / {es ? 'INVESTIGACIÓN' : 'RESEARCH'}</span>
          <p>
            {es
              ? 'Estudia el sueño y las experiencias al soñar.'
              : 'Studies sleep and the experience of dreaming.'}
          </p>
        </div>
        <div>
          <span>02 / {es ? 'SIMBOLISMO' : 'SYMBOLISM'}</span>
          <p>
            {es
              ? 'Ofrece asociaciones culturales e interpretativas.'
              : 'Offers cultural and interpretive associations.'}
          </p>
        </div>
        <div>
          <span>03 / {es ? 'REFLEXIÓN' : 'REFLECTION'}</span>
          <p>
            {es
              ? 'Nuestras preguntas, para encontrar tu propia conexión.'
              : 'Our prompts, for finding your own connection.'}
          </p>
        </div>
      </div>
      <h2 className="science-heading">
        {es ? 'Lo que podemos decir con cuidado.' : 'What we can say with care.'}
      </h2>
      <div className="research-grid">
        {research.map(([number, title, body, label, url]) => (
          <article key={number}>
            <span className="research-number">{number}</span>
            <h3>{title}</h3>
            <p>{body}</p>
            <a href={url} target="_blank" rel="noreferrer">
              {label} ↗
            </a>
          </article>
        ))}
      </div>
      <section className="method-note">
        <span className="eyebrow">{es ? 'CÓMO LEEMOS TU SUEÑO' : 'HOW WE READ YOUR DREAM'}</span>
        <h2>
          {es
            ? 'Un punto de partida. La conexión es tuya.'
            : 'A starting point. The connection is yours.'}
        </h2>
        <p>
          {es
            ? 'Sone busca palabras en tu descripción y las relaciona con 32 símbolos. Usa esos temas y la sensación que describes para componer una reflexión con textos que escribimos nosotros. No analiza tu mente ni verifica qué significa tu sueño.'
            : 'Sone matches words in your description to 32 symbols. It uses those themes and the feeling you describe to assemble a reflection from writing we created. It does not analyze your mind or verify what your dream means.'}
        </p>
        <p>
          {es
            ? 'Los diccionarios enlazados son fuentes de simbolismo popular, no evidencia científica. Nuestras tarjetas no son significados validados, diagnósticos ni predicciones. Las asociaciones varían entre personas y culturas; tu experiencia puede ser completamente diferente.'
            : 'The linked dictionaries are sources of popular symbolism, not scientific evidence. Our cards are not validated meanings, diagnoses or predictions. Associations vary between people and cultures; your experience may be entirely different.'}
        </p>
        <p>
          {es
            ? 'Las ilustraciones, reflexiones y preguntas son originales de Sone. Las asociaciones con fuente son paráfrasis breves, no citas. No atribuimos estas ideas a una tradición mexicana concreta sin una fuente histórica.'
            : 'Illustrations, reflections and questions are original to Sone. Sourced associations are short paraphrases, not quotations. We do not attribute these ideas to a specific Mexican tradition without a historical source.'}
        </p>
      </section>
      <section className="source-directory">
        <span className="eyebrow">
          {es ? 'LA BIBLIOTECA DETRÁS DE LAS TARJETAS' : 'THE LIBRARY BEHIND THE CARDS'}
        </span>
        <h2>{es ? 'Cada símbolo, con su origen.' : 'Every symbol, with its source.'}</h2>
        <p>
          {es
            ? 'Referencias revisadas el 19 de octubre de 2026. Las páginas externas están en inglés. Los títulos de las entradas se conservan para que puedas encontrarlas.'
            : 'References reviewed October 19, 2026. External pages are in English. Entry titles are preserved so you can find them on the linked page.'}
        </p>
        <div className="source-list">
          {getDictionary(lang).map((s) => (
            <div key={s.id}>
              <a href="#dictionary">{s.name}</a>
              {s.source.url ? (
                <a href={s.source.url} target="_blank" rel="noreferrer">
                  {s.source.title} · {s.source.entry} ↗
                </a>
              ) : (
                <span>{es ? 'Metáfora original de Sone' : 'Original Sone metaphor'}</span>
              )}
            </div>
          ))}
        </div>
      </section>
      <a className="button orange" href="#home">
        {es ? 'Explorar un sueño ↗' : 'Explore a dream ↗'}
      </a>
    </section>
  );
}
