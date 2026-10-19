import type { Language, SymbolId } from './dictionary';
export type SymbolSource = {
  kind: 'dictionary' | 'editorial';
  title: string;
  url?: string;
  entry: string;
  association: Record<Language, string>;
};
export const symbolSources: Record<SymbolId, SymbolSource> = {
  moon: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamdictionary/m_all.htm',
    entry: 'Moon',
    association: { en: 'Cycles and changing moods.', es: 'Ciclos y cambios de ánimo.' },
  },
  water: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamdictionary/w.htm',
    entry: 'Water',
    association: {
      en: 'Emotions and the state of the water.',
      es: 'Emociones y el estado del agua.',
    },
  },
  snake: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/commondreams/snake-dreams.html',
    entry: 'Snakes',
    association: {
      en: 'Fear or transformation, depending on context.',
      es: 'Miedo o transformación, según el contexto.',
    },
  },
  flying: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/commondreams/flying-dreams.html',
    entry: 'Flying',
    association: {
      en: 'Freedom and a different perspective.',
      es: 'Libertad y una perspectiva diferente.',
    },
  },
  death: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/commondreams/death-dreams.html',
    entry: 'Death',
    association: {
      en: 'Endings and change, rather than a literal prediction.',
      es: 'Finales y cambios, no una predicción literal.',
    },
  },
  chase: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/commondreams/chase-dreams.html',
    entry: 'Being chased',
    association: {
      en: 'Avoidance and feelings of pressure.',
      es: 'Evasión y sensaciones de presión.',
    },
  },
  falling: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/commondreams/falling-dreams.html',
    entry: 'Falling',
    association: {
      en: 'Insecurity and a sense of losing control.',
      es: 'Inseguridad y sensación de perder el control.',
    },
  },
  school: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/commondreams/test-dreams.html',
    entry: 'Tests',
    association: { en: 'Feeling tested or evaluated.', es: 'Sentirse a prueba o bajo evaluación.' },
  },
  mirror: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamdictionary/m_all.htm',
    entry: 'Mirror',
    association: {
      en: 'Self-perception and identity.',
      es: 'Percepción de uno mismo e identidad.',
    },
  },
  money: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamdictionary/m_all.htm',
    entry: 'Money',
    association: {
      en: 'Self-worth, confidence and values.',
      es: 'Autoestima, confianza y valores.',
    },
  },
  mother: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamdictionary/m_all.htm',
    entry: 'Mother',
    association: {
      en: 'The Mother entry discusses care and guidance. Applying this to family more broadly is our own extension.',
      es: 'La entrada Mother habla de cuidado y orientación. Extenderla a la familia en general es una propuesta nuestra.',
    },
  },
  clock: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamdictionary/c_all.htm',
    entry: 'Clock',
    association: {
      en: 'Time, deadlines and the pace of life.',
      es: 'Tiempo, plazos y ritmo de vida.',
    },
  },
  house: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamthemes/house.htm',
    entry: 'House',
    association: {
      en: 'The house as an image of the self.',
      es: 'La casa como imagen de uno mismo.',
    },
  },
  door: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamthemes/house.htm',
    entry: 'Door',
    association: { en: 'Openness and new opportunities.', es: 'Apertura y nuevas oportunidades.' },
  },
  bird: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamthemes/birds.htm',
    entry: 'Birds',
    association: { en: 'Hopes and aspirations.', es: 'Esperanzas y aspiraciones.' },
  },
  cat: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamthemes/animals.htm',
    entry: 'Cat',
    association: { en: 'Independence and intuition.', es: 'Independencia e intuición.' },
  },
  dog: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamthemes/animals.htm',
    entry: 'Dog',
    association: { en: 'Loyalty and companionship.', es: 'Lealtad y compañía.' },
  },
  fish: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamthemes/animals.htm',
    entry: 'Fish',
    association: { en: 'Ideas emerging into awareness.', es: 'Ideas que llegan a la conciencia.' },
  },
  butterfly: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamthemes/bugs.htm',
    entry: 'Butterfly',
    association: { en: 'Change and transformation.', es: 'Cambio y transformación.' },
  },
  spider: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamthemes/bugs.htm',
    entry: 'Spider',
    association: {
      en: 'Creativity and feeling caught in a situation.',
      es: 'Creatividad y sentirse atrapado en una situación.',
    },
  },
  bee: {
    kind: 'dictionary',
    title: 'Dream Moods',
    url: 'https://www.dreammoods.com/dreamthemes/bugs.htm',
    entry: 'Bees',
    association: {
      en: 'Cooperation and productive work.',
      es: 'Cooperación y trabajo productivo.',
    },
  },
  bridge: {
    kind: 'dictionary',
    title: 'Dream Dictionary',
    url: 'https://www.dreamdictionary.org/dream-dictionary/dreaming-of-bridges/',
    entry: 'Bridges',
    association: { en: 'Transition between situations.', es: 'Transición entre situaciones.' },
  },
  tree: {
    kind: 'dictionary',
    title: 'Dream Dictionary',
    url: 'https://www.dreamdictionary.org/meaning/tree-dream-meaning/',
    entry: 'Tree',
    association: { en: 'Roots and personal growth.', es: 'Raíces y crecimiento personal.' },
  },
  mountain: {
    kind: 'dictionary',
    title: 'Dream Dictionary',
    url: 'https://www.dreamdictionary.org/dream-dictionary/dreaming-of-climbing/',
    entry: 'Climbing',
    association: { en: 'Challenges and progress.', es: 'Retos y progreso.' },
  },
  boat: {
    kind: 'dictionary',
    title: 'Dream Dictionary',
    url: 'https://www.dreamdictionary.org/dream-dictionary/dreaming-of-a-boat/',
    entry: 'Boat',
    association: {
      en: 'Navigating feelings and uncertainty.',
      es: 'Navegar emociones e incertidumbre.',
    },
  },
  teeth: {
    kind: 'editorial',
    title: 'Sone',
    entry: 'teeth',
    association: {
      en: 'Consider the feeling of being exposed or having something change unexpectedly.',
      es: 'Considera la sensación de quedar expuesto o de vivir un cambio inesperado.',
    },
  },
  flowers: {
    kind: 'editorial',
    title: 'Sone',
    entry: 'flowers',
    association: {
      en: 'Flowers can be a prompt to think about attention, care or something taking shape.',
      es: 'Las flores pueden invitarte a pensar en atención, cuidado o algo que está tomando forma.',
    },
  },
  baby: {
    kind: 'editorial',
    title: 'Sone',
    entry: 'baby',
    association: {
      en: 'A baby can be a starting image for thinking about newness or responsibility.',
      es: 'Un bebé puede ser una imagen para pensar en lo nuevo o en la responsabilidad.',
    },
  },
  fire: {
    kind: 'editorial',
    title: 'Sone',
    entry: 'fire',
    association: {
      en: 'Fire can invite questions about intensity, warmth or something that feels difficult to contain.',
      es: 'El fuego puede invitar a pensar en intensidad, calidez o algo difícil de contener.',
    },
  },
  road: {
    kind: 'editorial',
    title: 'Sone',
    entry: 'road',
    association: {
      en: 'A road can be a useful metaphor for choices and direction.',
      es: 'Un camino puede ser una metáfora para las decisiones y el rumbo.',
    },
  },
  rain: {
    kind: 'editorial',
    title: 'Sone',
    entry: 'rain',
    association: {
      en: 'Rain can invite reflection on relief, atmosphere or a feeling that lingers.',
      es: 'La lluvia puede invitar a pensar en alivio, ambiente o una sensación que persiste.',
    },
  },
  person: {
    kind: 'editorial',
    title: 'Sone',
    entry: 'person',
    association: {
      en: 'A person in a dream can be a prompt to reflect on your own memories and relationships.',
      es: 'Una persona en un sueño puede invitarte a reflexionar sobre tus recuerdos y relaciones.',
    },
  },
};
