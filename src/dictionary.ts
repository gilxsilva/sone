import { symbolSources, type SymbolSource } from './sources';
import { spanishSymbols } from './symbols-es';
export type Language = 'en' | 'es';
export type SymbolId =
  | 'moon'
  | 'water'
  | 'snake'
  | 'teeth'
  | 'flying'
  | 'house'
  | 'cat'
  | 'bird'
  | 'flowers'
  | 'death'
  | 'baby'
  | 'fire'
  | 'road'
  | 'money'
  | 'rain'
  | 'mother'
  | 'door'
  | 'chase'
  | 'falling'
  | 'person'
  | 'dog'
  | 'fish'
  | 'butterfly'
  | 'spider'
  | 'bee'
  | 'bridge'
  | 'school'
  | 'mirror'
  | 'clock'
  | 'tree'
  | 'mountain'
  | 'boat';
export type Category = 'Nature' | 'Animals' | 'People & places' | 'Change & feelings';
export type DreamSymbol = {
  id: SymbolId;
  name: string;
  subtitle: string;
  words: string[];
  category: Category;
  folklore: string;
  reflection: string;
  question: string;
  color: string;
  theme: string;
  source: SymbolSource;
};
const entries: (Omit<DreamSymbol, 'source'> & { source?: { title: string; url: string } })[] = [
  {
    id: 'moon',
    name: 'The moon',
    subtitle: 'A different kind of light',
    words: ['moon', 'moons', 'moonlight', 'lunar', 'stars', 'luna', 'estrellas'],
    category: 'Nature',
    folklore:
      'In some folk readings, the moon stands for cycles and things not yet fully revealed. Think of it as a story about change, rather than a sign of what is coming.',
    reflection:
      'A moonlit scene can be a way into questions about uncertainty, rest, or seeing something familiar differently.',
    question: 'What could you see in the dream, and what was still out of view?',
    color: '#c4b8dc',
    theme: 'uncertainty and new perspectives',
  },
  {
    id: 'water',
    name: 'Water',
    subtitle: 'Go with the feeling',
    words: [
      'water',
      'waters',
      'ocean',
      'sea',
      'river',
      'rivers',
      'lake',
      'lakes',
      'swim',
      'swimming',
      'swam',
      'swimming pool',
      'flood',
      'flooding',
      'waves',
      'drowning',
      'beach',
      'agua',
      'mar',
      'rio',
      'nadaba',
      'nadar',
      'piscina',
      'olas',
      'lago',
      'playa',
    ],
    category: 'Nature',
    folklore:
      'A familiar folk reading connects clear water with calm and troubled water with worries. It is a cultural association, not a forecast.',
    reflection:
      'Water gives you a way to describe emotion: still, flowing, overwhelming, or something you feel held by. Your experience of the scene matters more than the symbol alone.',
    question: 'Were you floating, fighting the current, or watching from the shore?',
    color: '#a9c9c6',
    theme: 'feelings and how you move through them',
  },
  {
    id: 'snake',
    name: 'Snakes',
    subtitle: 'A little room to change',
    words: [
      'snake',
      'snakes',
      'serpent',
      'serpents',
      'viper',
      'python',
      'cobra',
      'serpiente',
      'serpientes',
      'vibora',
      'culebra',
    ],
    category: 'Animals',
    folklore:
      'Some family stories connect snakes with distrust; others focus on renewal because snakes shed their skin. These are different traditions, not evidence that someone is deceiving you.',
    reflection:
      'A snake can be a starting point for exploring a change, an instinct, or something unfamiliar. Whether you felt safe or threatened makes a difference.',
    question: 'Did you want to move closer, stay still, or get away?',
    color: '#c2cf94',
    theme: 'change, instinct, and personal boundaries',
  },
  {
    id: 'teeth',
    name: 'Teeth',
    subtitle: 'Something is coming loose',
    words: [
      'tooth',
      'teeth',
      'molar',
      'molars',
      'dentures',
      'diente',
      'dientes',
      'muela',
      'muelas',
    ],
    category: 'Change & feelings',
    folklore:
      'Some traditions link losing teeth with loss or bad news. A dream cannot establish that those events will happen.',
    reflection:
      'You might explore whether the scene reminds you of feeling exposed, struggling to speak, or being unable to control a change.',
    question: 'What felt worse: losing the teeth, or someone seeing it happen?',
    color: '#edb38e',
    theme: 'vulnerability and finding your voice',
  },
  {
    id: 'flying',
    name: 'Flying',
    subtitle: 'A little less gravity',
    words: [
      'fly',
      'flying',
      'flew',
      'float',
      'floating',
      'floated',
      'wings',
      'soar',
      'soaring',
      'volar',
      'volaba',
      'volando',
      'vuelo',
      'flotaba',
      'alas',
    ],
    category: 'Change & feelings',
    folklore:
      'Flight is often read as freedom, good fortune, or a wish finding its way. These are hopeful stories, not promises.',
    reflection:
      'Flying offers a way to think about freedom, perspective, or getting distance from something. Notice whether it felt effortless or hard to control.',
    question: 'Were you flying toward something, or getting away from something?',
    color: '#b4c5e0',
    theme: 'freedom and a change of perspective',
  },
  {
    id: 'house',
    name: 'A house',
    subtitle: 'Make yourself at home',
    words: [
      'house',
      'houses',
      'home',
      'homes',
      'room',
      'rooms',
      'bedroom',
      'kitchen',
      'apartment',
      'childhood home',
      'casa',
      'hogar',
      'habitacion',
      'cuarto',
      'cocina',
    ],
    category: 'People & places',
    folklore:
      'In family storytelling, a house often holds family memories. New rooms or doors sometimes stand for a visitor or a new chapter.',
    reflection:
      'The house can be a useful map of your personal space: familiar corners, private rooms, and places you have not explored.',
    question: 'Did this place feel like yours, even if you had never seen it before?',
    color: '#e5a280',
    theme: 'belonging, memory, and personal space',
  },
  {
    id: 'cat',
    name: 'Cats',
    subtitle: 'Trust your own rhythm',
    words: ['cat', 'cats', 'kitten', 'kittens', 'feline', 'gato', 'gata', 'gatito', 'gatos'],
    category: 'Animals',
    folklore:
      'Cats appear in stories about independence and intuition. Their color is not evidence of good or bad luck.',
    reflection:
      'A cat might bring up your own associations with affection, independence, curiosity, or protecting your space.',
    question: 'Did the cat come to you, or keep a little distance?',
    color: '#d0b5cd',
    theme: 'independence and closeness',
  },
  {
    id: 'bird',
    name: 'Birds',
    subtitle: 'Let something take flight',
    words: [
      'bird',
      'birds',
      'dove',
      'doves',
      'hummingbird',
      'raven',
      'crow',
      'pajaro',
      'pajaros',
      'paloma',
      'colibri',
    ],
    category: 'Animals',
    folklore:
      'Birds show up as messengers in many family stories. A bird in a dream does not prove a message or news is on its way.',
    reflection:
      'You could use the bird as an image for hope, movement, or something you want to communicate.',
    question: 'If the bird could have said one thing, what would you have wanted to hear?',
    color: '#c3cf93',
    theme: 'hope, movement, and communication',
  },
  {
    id: 'flowers',
    name: 'Flowers',
    subtitle: 'See what is growing',
    words: [
      'flower',
      'flowers',
      'garden',
      'gardens',
      'rose',
      'roses',
      'bloom',
      'blossom',
      'flor',
      'flores',
      'jardin',
      'rosas',
      'plantas',
    ],
    category: 'Nature',
    folklore:
      'Flowers can carry affection, celebration, and remembrance. In Mexican Día de Muertos traditions, marigolds are connected with remembering people who have died.',
    reflection:
      'They can open a conversation about what you are tending to, what brings joy, or what needs attention.',
    question: 'Who or what did the flowers remind you of?',
    color: '#e8a8a5',
    theme: 'care, growth, and remembrance',
  },
  {
    id: 'death',
    name: 'Goodbyes',
    subtitle: 'An ending can be a doorway',
    words: [
      'death',
      'dead',
      'died',
      'dying',
      'die',
      'funeral',
      'cemetery',
      'grave',
      'passed away',
      'muerte',
      'muerto',
      'muerta',
      'murio',
      'morir',
      'cementerio',
    ],
    category: 'Change & feelings',
    folklore:
      'One folk saying claims that dreaming of death adds years to a life. It is a saying, not a promise or a warning.',
    reflection:
      'A goodbye may bring up a real absence, an imagined loss, or a life change. You do not need to turn it into a prediction.',
    question: 'What would you want to hold onto from the person, place, or chapter in the dream?',
    color: '#c6bbcc',
    theme: 'endings, absence, and what stays with you',
  },
  {
    id: 'baby',
    name: 'New beginnings',
    subtitle: 'Something needs your care',
    words: [
      'baby',
      'babies',
      'pregnant',
      'pregnancy',
      'newborn',
      'birth',
      'giving birth',
      'bebe',
      'embarazada',
      'embarazo',
      'nacimiento',
    ],
    category: 'People & places',
    folklore:
      'Babies are sometimes read as the arrival of news or responsibilities. A dream is not evidence of pregnancy.',
    reflection:
      'A new arrival can be a way to explore a project, relationship, or vulnerable part of yourself that needs care.',
    question: 'What is new in your life, and what would help it grow?',
    color: '#e6c37d',
    theme: 'new beginnings and responsibility',
  },
  {
    id: 'fire',
    name: 'Fire',
    subtitle: 'Feel the spark',
    words: [
      'fire',
      'fires',
      'flame',
      'flames',
      'burning',
      'burnt',
      'bonfire',
      'wildfire',
      'fuego',
      'incendio',
      'llama',
      'quemaba',
    ],
    category: 'Nature',
    folklore:
      'Fire can represent passion, conflict, or clearing out the old in folk readings. Different stories give it different meanings.',
    reflection:
      'You might explore its intensity: excitement, anger, warmth, or the feeling that something is getting out of hand.',
    question: 'Was the fire warming you, or threatening something you cared about?',
    color: '#efa06f',
    theme: 'energy, intensity, and transformation',
  },
  {
    id: 'road',
    name: 'The road',
    subtitle: 'Find your own way',
    words: [
      'road',
      'roads',
      'path',
      'paths',
      'journey',
      'travel',
      'traveling',
      'travelling',
      'train',
      'car',
      'driving',
      'lost',
      'camino',
      'carretera',
      'viaje',
      'viajaba',
      'sendero',
      'perdido',
      'perdida',
    ],
    category: 'People & places',
    folklore:
      'Paths and crossroads are often read as choices or journeys. A dream does not tell you which real-life decision to make.',
    reflection:
      'The road may give you a way to think about direction, pace, or whether the route you are on feels like your own.',
    question: 'Did you know where you were going, or was that part of the adventure?',
    color: '#cccb94',
    theme: 'direction and choices',
  },
  {
    id: 'money',
    name: 'Money',
    subtitle: 'What matters to you?',
    words: [
      'money',
      'coin',
      'coins',
      'cash',
      'gold',
      'treasure',
      'rich',
      'wealth',
      'dinero',
      'moneda',
      'billete',
      'oro',
      'tesoro',
    ],
    category: 'Change & feelings',
    folklore:
      'Some stories connect coins with fortune; others say dream riches bring expenses. These contradictory sayings offer no financial insight.',
    reflection:
      'Money might be a useful starting point for thoughts about security, resources, or what you value beyond money.',
    question: 'In this dream, what did having enough (or not enough) feel like?',
    color: '#e7c268',
    theme: 'security and what you value',
  },
  {
    id: 'rain',
    name: 'Rain',
    subtitle: 'Let it all wash through',
    words: [
      'rain',
      'raining',
      'rainy',
      'storm',
      'thunder',
      'thunderstorm',
      'lluvia',
      'llovia',
      'lloviendo',
      'tormenta',
      'trueno',
    ],
    category: 'Nature',
    folklore:
      'Rain is often read as cleansing or renewal; storms as feelings that need release. This is a metaphor, not a forecast.',
    reflection:
      'You could explore whether the scene felt like relief, an interruption, or a need to find shelter.',
    question: 'Were you looking for cover, or enjoying being out in it?',
    color: '#a8c2d1',
    theme: 'release, shelter, and renewal',
  },
  {
    id: 'mother',
    name: 'Family',
    subtitle: 'The people we carry',
    words: [
      'grandmother',
      'grandma',
      'grandfather',
      'grandpa',
      'mother',
      'mom',
      'mum',
      'father',
      'dad',
      'family',
      'sister',
      'brother',
      'abuela',
      'abuelita',
      'abuelo',
      'mama',
      'madre',
      'papa',
      'padre',
      'familia',
      'hermana',
      'hermano',
    ],
    category: 'People & places',
    folklore:
      'Some families describe dreams of loved ones as visits, advice, or affection finding its way back. These are meaningful stories, not proof of a supernatural message.',
    reflection:
      'The person may bring up a memory, a relationship, or a way of caring that matters to you now. Your actual connection is the best place to start.',
    question: 'What gesture, words, or feeling from that person stayed with you?',
    color: '#ddaf93',
    theme: 'connection, care, and memory',
  },
  {
    id: 'door',
    name: 'Doors',
    subtitle: 'What is on the other side?',
    words: [
      'door',
      'doors',
      'doorway',
      'window',
      'windows',
      'key',
      'keys',
      'threshold',
      'stairs',
      'staircase',
      'puerta',
      'ventana',
      'llave',
      'umbral',
      'escalera',
    ],
    category: 'People & places',
    folklore:
      'An open door often stands for opportunity in folk readings, while a closed door suggests finding another way.',
    reflection:
      'You might explore a transition, a boundary, or something you want to let into your life.',
    question: 'Were you ready to go through, or did you want to keep it closed?',
    color: '#b9c999',
    theme: 'opportunity, boundaries, and transitions',
  },
  {
    id: 'chase',
    name: 'Being chased',
    subtitle: 'Pause the running',
    words: [
      'chased',
      'chasing me',
      'being chased',
      'pursued',
      'pursuing me',
      'running away',
      'escape',
      'escaping',
      'perseguia',
      'persigue',
      'perseguian',
      'escapar',
    ],
    category: 'Change & feelings',
    folklore:
      'A pursuer is sometimes described as an unfinished matter catching up with the dreamer. It is a storytelling device, not a warning of actual danger.',
    reflection:
      'You can ask whether the urgency feels familiar: pressure, an uncomfortable feeling, or needing more safety and breathing room.',
    question: 'If you could pause the dream, what would help you feel safe?',
    color: '#bfb4d3',
    theme: 'pressure and finding safety',
  },
  {
    id: 'falling',
    name: 'Falling',
    subtitle: 'Looking for solid ground',
    words: ['fall', 'falling', 'fell', 'falling down', 'caer', 'cayendo', 'caia', 'caida'],
    category: 'Change & feelings',
    folklore:
      'Falling appears in stories about losing your footing or letting go. It does not tell you that you will fail.',
    reflection:
      'Consider whether the feeling resembles uncertainty, a sudden change, or needing support. It can also simply be a vivid sleep experience.',
    question: 'Were you afraid of landing, or did the falling itself feel strangely freeing?',
    color: '#e6b18e',
    theme: 'uncertainty, support, and letting go',
  },
  {
    id: 'person',
    name: 'Someone familiar',
    subtitle: 'A face, a feeling, a memory',
    words: [
      'friend',
      'friends',
      'ex',
      'ex-boyfriend',
      'ex-girlfriend',
      'partner',
      'boyfriend',
      'girlfriend',
      'husband',
      'wife',
      'stranger',
      'strangers',
      'someone',
      'amigo',
      'amiga',
      'pareja',
      'novio',
      'novia',
    ],
    category: 'People & places',
    folklore:
      'An old saying suggests someone you dream about is thinking of you. A dream cannot tell you what another person thinks or feels.',
    reflection:
      'Consider your own associations with this person: a memory, a quality, or an unresolved conversation. Their appearance does not establish anything about them.',
    question: 'What feeling did this person bring into the scene?',
    color: '#ceb2c2',
    theme: 'relationships and personal associations',
  },
  {
    id: 'dog',
    name: 'Dogs',
    subtitle: 'Company for the journey',
    words: ['dog', 'dogs', 'puppy', 'puppies', 'perro', 'perros', 'perrito', 'mascota'],
    category: 'Animals',
    folklore:
      'Symbolic dictionaries often connect dogs with loyalty. A dream cannot establish anyone’s intentions.',
    reflection:
      'Notice what the company was like: welcoming, demanding, or distant. Who does that kind of presence remind you of?',
    question: 'What did you need from the dog, and how did it respond?',
    color: '#dfb483',
    theme: 'companionship and trust',
    source: {
      title: 'Dream Moods · Animals',
      url: 'https://www.dreammoods.com/dreamthemes/animals.htm',
    },
  },
  {
    id: 'fish',
    name: 'Fish',
    subtitle: 'An idea under the surface',
    words: ['fish', 'fishes', 'goldfish', 'aquarium', 'pez', 'peces', 'pescado', 'acuario'],
    category: 'Animals',
    folklore:
      'Fish are sometimes associated with emerging ideas. They are not signs of pregnancy or fortune.',
    reflection:
      'Notice where they swam and whether they could move freely. You can use that scene to describe something that is hard to put into words.',
    question: 'What did you want to look at more closely?',
    color: '#9cc4be',
    theme: 'curiosity and expression',
    source: {
      title: 'Dream Moods · Animals',
      url: 'https://www.dreammoods.com/dreamthemes/animals.htm',
    },
  },
  {
    id: 'butterfly',
    name: 'Butterflies',
    subtitle: 'Change at your own pace',
    words: ['butterfly', 'butterflies', 'mariposa', 'mariposas'],
    category: 'Animals',
    folklore:
      'Transformation is a familiar butterfly association. It is an image, not a promise of what comes next.',
    reflection: 'Ask what felt delicate or new in the scene, and how much room it had to move.',
    question: 'Did you want to follow it, let it go, or protect it?',
    color: '#d1accb',
    theme: 'change and tenderness',
    source: { title: 'Dream Moods · Bugs', url: 'https://www.dreammoods.com/dreamthemes/bugs.htm' },
  },
  {
    id: 'spider',
    name: 'Spiders',
    subtitle: 'Follow the threads',
    words: ['spider', 'spiders', 'cobweb', 'web', 'araña', 'arañas', 'telaraña', 'telarañas'],
    category: 'Animals',
    folklore:
      'Webs are read as creativity in some dictionaries and entanglement in others. Neither proves a real threat.',
    reflection:
      'The scene can open questions about something you are patiently making, or something that feels too complicated.',
    question: 'Was the web something you admired, or something you wanted to get out of?',
    color: '#c1b1d1',
    theme: 'patience and connections',
    source: { title: 'Dream Moods · Bugs', url: 'https://www.dreammoods.com/dreamthemes/bugs.htm' },
  },
  {
    id: 'bee',
    name: 'Bees',
    subtitle: 'A shared effort',
    words: ['bee', 'bees', 'honeybee', 'hive', 'abeja', 'abejas', 'colmena'],
    category: 'Animals',
    folklore:
      'Bees are associated with communal work in symbolic readings. They do not predict success or trouble.',
    reflection:
      'Notice whether the group welcomed or overwhelmed you. Explore your own relationship with activity, rest, and collaboration.',
    question: 'Did you have a place in the swarm, or need some distance?',
    color: '#e8c264',
    theme: 'collaboration and rest',
    source: { title: 'Dream Moods · Bugs', url: 'https://www.dreammoods.com/dreamthemes/bugs.htm' },
  },
  {
    id: 'bridge',
    name: 'Bridges',
    subtitle: 'Between here and there',
    words: ['bridge', 'bridges', 'puente', 'puentes'],
    category: 'People & places',
    folklore:
      'A bridge is often read as a transition. Its condition in a dream does not announce success or failure.',
    reflection:
      'Consider what it connected and whether you wanted to cross. It can be a way to talk about a decision without making it for you.',
    question: 'What were you leaving behind, and what did you hope to find across it?',
    color: '#b3c8b0',
    theme: 'transitions and connections',
    source: {
      title: 'Dream Dictionary · Bridges',
      url: 'https://www.dreamdictionary.org/dream-dictionary/dreaming-of-bridges/',
    },
  },
  {
    id: 'school',
    name: 'School',
    subtitle: 'Still figuring things out',
    words: [
      'school',
      'classroom',
      'exam',
      'exams',
      'test',
      'tests',
      'teacher',
      'escuela',
      'colegio',
      'examen',
      'examenes',
      'maestra',
      'maestro',
    ],
    category: 'People & places',
    folklore:
      'Popular interpretations connect exams with feeling evaluated. They do not predict performance.',
    reflection:
      'Ask who set the rules in the dream, and whether you felt allowed to make mistakes.',
    question: 'What did you need to know, and who expected you to know it?',
    color: '#e7bb8a',
    theme: 'expectations and learning',
    source: {
      title: 'Dream Moods · Taking a test',
      url: 'https://www.dreammoods.com/commondreams/test-dreams.html',
    },
  },
  {
    id: 'mirror',
    name: 'Mirrors',
    subtitle: 'A look at yourself',
    words: ['mirror', 'mirrors', 'reflection', 'espejo', 'espejos', 'reflejo'],
    category: 'Change & feelings',
    folklore:
      'Mirrors are used as images of identity in symbolic storytelling. They do not reveal a hidden truth about you.',
    reflection:
      'Notice what you recognized and what changed in the reflection. Your own associations may give that difference context.',
    question: 'Did the reflection look like how you feel, or how you think others see you?',
    color: '#c4b8d8',
    theme: 'identity and perception',
  },
  {
    id: 'clock',
    name: 'Clocks',
    subtitle: 'In your own time',
    words: ['clock', 'clocks', 'watch', 'watches', 'time', 'reloj', 'relojes', 'hora', 'tiempo'],
    category: 'Change & feelings',
    folklore: 'A clock is a metaphor for passing time. It does not count down to a future event.',
    reflection:
      'Notice whether you were waiting, late, or had time to spare. That difference can help you describe your own pace.',
    question: 'What did you feel there was not enough time for?',
    color: '#e0bc78',
    theme: 'pace and priorities',
  },
  {
    id: 'tree',
    name: 'Trees',
    subtitle: 'Roots and possibilities',
    words: ['tree', 'trees', 'oak', 'forest', 'arbol', 'arboles', 'bosque', 'raices'],
    category: 'Nature',
    folklore:
      'Roots are often associated with stability. A dream tree does not forecast your family’s health.',
    reflection:
      'Notice whether you wanted shade, height, or a place to rest. What did this tree offer that you needed?',
    question: 'Did you want to stay by the roots or climb into the branches?',
    color: '#b8c38f',
    theme: 'grounding and growth',
    source: {
      title: 'Dream Dictionary · Trees',
      url: 'https://www.dreamdictionary.org/meaning/tree-dream-meaning/',
    },
  },
  {
    id: 'mountain',
    name: 'Mountains',
    subtitle: 'One step at a time',
    words: [
      'mountain',
      'mountains',
      'climb',
      'climbing',
      'summit',
      'montaña',
      'montañas',
      'cumbre',
      'escalar',
    ],
    category: 'Nature',
    folklore:
      'A mountain is a familiar metaphor for a challenge. The summit does not measure your worth or predict an outcome.',
    reflection:
      'Ask whether you wanted to climb or simply look. Not every image of height has to become a goal.',
    question: 'Were you moving at your own pace, or trying to keep up with someone else?',
    color: '#adbdce',
    theme: 'effort and perspective',
    source: {
      title: 'Dream Dictionary · Climbing',
      url: 'https://www.dreamdictionary.org/dream-dictionary/dreaming-of-climbing/',
    },
  },
  {
    id: 'boat',
    name: 'Boats',
    subtitle: 'Something to hold you',
    words: [
      'boat',
      'boats',
      'ship',
      'ships',
      'sailboat',
      'canoe',
      'barco',
      'barcos',
      'bote',
      'botes',
      'canoa',
    ],
    category: 'People & places',
    folklore:
      'Boats appear as journey images in symbolic readings. They cannot tell you how your own journey will unfold.',
    reflection:
      'Notice who was steering and what helped you stay afloat. Explore what kind of support was useful to you.',
    question: 'Did you want to row, rest, or have someone come along?',
    color: '#aac9c1',
    theme: 'support and direction',
    source: {
      title: 'Dream Dictionary · Boats',
      url: 'https://www.dreamdictionary.org/dream-dictionary/dreaming-of-a-boat/',
    },
  },
];
export const dictionary: DreamSymbol[] = entries.map((s) => ({
  ...s,
  source: symbolSources[s.id],
  folklore: symbolSources[s.id].association.en,
}));
export function getDictionary(lang: Language = 'en'): DreamSymbol[] {
  return lang === 'es'
    ? dictionary.map((s) => ({ ...s, ...spanishSymbols[s.id], folklore: s.source.association.es }))
    : dictionary;
}
export const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’‘]/g, "'");
const escaped = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
export function findSymbols(text: string, lang: Language = 'en') {
  const n = normalize(text);
  return getDictionary(lang)
    .map((symbol) => ({
      symbol,
      index: Math.min(
        ...symbol.words.map((w) => {
          const match = new RegExp('\\b' + escaped(normalize(w)) + '\\b').exec(n);
          return match ? match.index : Infinity;
        }),
      ),
    }))
    .filter((s) => Number.isFinite(s.index))
    .sort((a, b) => a.index - b.index)
    .map((s) => s.symbol);
}
export const feelings = [
  'Let the words lead',
  'Curious',
  'Peaceful',
  'Uneasy',
  'Joyful',
  'Sad',
  'Overwhelmed',
] as const;
export type Feeling = (typeof feelings)[number];
export function dreamMood(text: string, chosen: Feeling) {
  if (chosen !== 'Let the words lead') return chosen;
  const n = normalize(text).replace(
    /(?:not|never) (?:at all )?(?:afraid|scared|frightened)|(?:no|without) fear|no (?:tenia|sentia|tuve) miedo|sin miedo/g,
    '',
  );
  if (/\b(scared|afraid|fear|terrified|anxious|panic|miedo|terror|angustia)\b/.test(n))
    return 'Uneasy';
  if (
    /\b(overwhelmed|overwhelming|helpless|trapped|agobio|abrumado|abrumada|atrapado|atrapada)\b/.test(
      n,
    )
  )
    return 'Overwhelmed';
  if (/\b(sad|sadness|crying|cried|grief|lonely|triste|lloraba)\b/.test(n)) return 'Sad';
  if (/\b(happy|joy|joyful|excited|laughing|feliz|alegria|contento|contenta)\b/.test(n))
    return 'Joyful';
  if (/\b(calm|peace|peaceful|safe|relaxed|tranquil|tranquilo|tranquila|paz|calma)\b/.test(n))
    return 'Peaceful';
  return 'Unspecified';
}
export const moodNotes: Record<string, string> = {
  Unspecified:
    'You haven’t named a clear feeling. Was the scene comforting, unsettling, or something else? That detail may be a useful place to start.',
  Curious:
    'Start with the detail you are still wondering about. Your own associations can tell you more than a ready-made definition.',
  Peaceful:
    'Notice what felt easy or safe. Is there a place, person, or way of being in waking life that gives you something similar?',
  Uneasy:
    'The unsettling feeling deserves attention, without treating it as a warning. What would have helped you feel safer in the scene?',
  Joyful:
    'Hold onto the part that felt good. What made this scene feel lighter, freer, or more connected?',
  Sad: 'A sad dream can stay with you. Give the feeling some room, and ask what you wanted or missed in that moment.',
  Overwhelmed:
    'Look at what was asking too much of you in the dream. What support or breathing room would have changed the scene?',
};
export function makeReading(text: string, chosen: Feeling, lang: Language = 'en') {
  const symbols = findSymbols(text, lang);
  const mood = dreamMood(text, chosen);
  const themes = [...new Set(symbols.slice(0, 3).map((s) => s.theme))];
  if (lang === 'es') {
    const title =
      symbols.length > 1
        ? `${symbols[0].name} y ${symbols[1].name.toLowerCase()}`
        : symbols[0]?.subtitle || 'Un sueño que solo es tuyo';
    const tone = ['Uneasy', 'Overwhelmed'].includes(mood)
      ? 'Vale la pena explorar qué te habría dado seguridad, espacio o apoyo.'
      : ['Peaceful', 'Joyful'].includes(mood)
        ? 'Fíjate en lo que se sentía posible, acogedor o liberador.'
        : mood === 'Sad'
          ? 'Empieza por lo que extrañabas o querías conservar.'
          : 'La imagen que se queda contigo es un buen punto de partida.';
    const summary = symbols.length
      ? `Una forma de acercarte a este sueño es explorar ${themes.slice(0, 2).join(', junto con ')}. ${tone} Son conexiones posibles, no un significado definitivo.`
      : 'Este sueño aún no coincide con un símbolo de nuestra colección. No vamos a inventar un significado. Empieza por la sensación y ese detalle que sigues recordando. ¿Con qué lo relacionas en tu propia vida?';
    return {
      symbols,
      mood,
      title,
      summary,
      question:
        symbols[0]?.question || 'Si pudieras volver a un momento del sueño, ¿cuál sería y por qué?',
    };
  }
  const title =
    symbols.length > 1
      ? `${symbols[0].name.replace(/^The |^A /, '')} & ${symbols[1].name.toLowerCase().replace(/^the |^a /, '')}`
      : symbols[0]?.subtitle || 'A dream that is all your own';
  const summary = symbols.length
    ? `One way into this dream is through ${themes.slice(0, 2).join(', alongside ')}. ${mood === 'Uneasy' || mood === 'Overwhelmed' ? 'The uneasy tone makes safety, space, or support worth exploring.' : mood === 'Peaceful' || mood === 'Joyful' ? 'The lighter tone makes it worth noticing what felt possible, comforting, or freeing.' : mood === 'Sad' ? 'The sadness gives you a place to begin: what felt missing, or what did you want to hold onto?' : 'The image that stays with you is a useful place to begin.'} These are possible connections, not a fixed meaning.`
    : 'This dream does not match a symbol in our small collection yet, so we will not invent a specific meaning. Start with the feeling and the one detail you keep replaying. What does that detail remind you of in your own life?';
  return {
    symbols,
    mood,
    title,
    summary,
    question:
      symbols[0]?.question ||
      'If you could return to one moment of the dream, which would it be, and why?',
  };
}
export type Reading = ReturnType<typeof makeReading>;
export function shareReading(
  reading: Reading,
  dream: string,
  includeDream: boolean,
  lang: Language = 'en',
) {
  if (lang === 'es')
    return [
      'Mi sueño, explorado con Sone',
      ...(includeDream ? ['', `El sueño: ${dream}`] : []),
      '',
      reading.title,
      '',
      reading.summary,
      '',
      `La sensación: ${feelingLabels[reading.mood]}`,
      spanishMoodNotes[reading.mood],
      ...(reading.symbols.length
        ? ['', 'Símbolos del sueño', ...reading.symbols.map((s) => `${s.name}: ${s.reflection}`)]
        : []),
      '',
      'Una pregunta para llevarme',
      reading.question,
      '',
      'Una lectura simbólica para reflexionar. No es una predicción ni un diagnóstico.',
      'Sone. Un espacio para tus sueños.',
      'Reflexión original de Sone. Fuentes y enfoque: https://sone-tau.vercel.app/?lang=es#about-dreams',
    ].join('\n');
  return [
    'My dream, explored with Sone',
    ...(includeDream ? ['', `The dream: ${dream}`] : []),
    '',
    reading.title,
    '',
    reading.summary,
    '',
    `The feeling: ${reading.mood}`,
    getMoodNote(reading.mood, lang),
    ...(reading.symbols.length
      ? ['', 'Symbols in the dream', ...reading.symbols.map((s) => `${s.name}: ${s.reflection}`)]
      : []),
    '',
    'A question to take with me',
    reading.question,
    '',
    'A symbolic reading for reflection. Not a prediction or diagnosis.',
    'Sone. A little room for your dreams.',
    'Original Sone reflection. Sources and approach: https://sone-tau.vercel.app/?lang=en#about-dreams',
  ].join('\n');
}

export const feelingLabels: Record<string, string> = {
  'Let the words lead': 'Que hablen los detalles',
  Curious: 'Curiosidad',
  Peaceful: 'Calma',
  Uneasy: 'Inquietud',
  Joyful: 'Alegría',
  Sad: 'Tristeza',
  Overwhelmed: 'Agobio',
  Unspecified: 'Sin definir',
};
const spanishMoodNotes: Record<string, string> = {
  Unspecified:
    'No has nombrado una sensación clara. ¿La escena era acogedora, inquietante o algo distinto? Ese detalle puede ser un punto de partida.',
  Curious:
    'Empieza por el detalle que te sigue dando curiosidad. Tus propias asociaciones pueden decirte más que una definición hecha.',
  Peaceful:
    'Fíjate en lo que se sentía fácil o seguro. ¿Hay un lugar, una persona o una manera de estar que te ofrezca algo similar?',
  Uneasy:
    'La inquietud merece atención sin convertirse en advertencia. ¿Qué te habría ayudado a sentirte a salvo?',
  Joyful:
    'Quédate un momento con lo que se sentía bien. ¿Qué hacía la escena más ligera, libre o cercana?',
  Sad: 'Un sueño triste puede acompañarte un rato. Dale espacio a esa sensación y pregúntate qué querías o extrañabas.',
  Overwhelmed:
    'Mira qué te exigía demasiado en el sueño. ¿Qué apoyo o respiro habría cambiado la escena?',
};
export function getMoodNote(mood: string, lang: Language) {
  return (lang === 'es' ? spanishMoodNotes : moodNotes)[mood];
}
