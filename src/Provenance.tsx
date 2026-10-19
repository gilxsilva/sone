import type { DreamSymbol } from './dictionary';
import { useI18n } from './i18n';

export function Provenance({ symbol }: { symbol: DreamSymbol }) {
  const { lang } = useI18n();
  const es = lang === 'es';
  const source = symbol.source;
  return (
    <aside
      className="provenance"
      aria-label={es ? 'Origen de esta asociación' : 'Source of this association'}
    >
      <p className="eyebrow">{es ? 'DE DÓNDE SALE ESTA IDEA' : 'WHERE THIS IDEA COMES FROM'}</p>
      {source.kind === 'dictionary' ? (
        <>
          <a href={source.url} target="_blank" rel="noreferrer">
            {source.title} · {source.entry} ↗
          </a>
          <p>
            {es
              ? 'La asociación simbólica resume esta entrada. Es una interpretación del diccionario, no un hallazgo científico.'
              : 'The symbolic association paraphrases this entry. It is a dictionary interpretation, not a scientific finding.'}
          </p>
        </>
      ) : (
        <>
          <strong>{es ? 'Metáfora original de Sone' : 'Original Sone metaphor'}</strong>
          <p>
            {es
              ? 'No usamos un diccionario externo para esta asociación. Es una propuesta creativa para reflexionar, no un significado establecido.'
              : 'No external dictionary was used for this association. It is a creative reflection prompt, not an established meaning.'}
          </p>
        </>
      )}
      <p>
        {es
          ? 'La reflexión y la pregunta son textos originales de Sone. No son citas ni conclusiones clínicas.'
          : 'The reflection and question are original Sone writing. They are not quotations or clinical conclusions.'}
      </p>
      <a className="provenance-method" href="#about-dreams">
        {es ? 'Fuentes y enfoque ↗' : 'Sources & approach ↗'}
      </a>
    </aside>
  );
}
