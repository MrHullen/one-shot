export const character = $state({
  name: 'Bob the Alchemist',
  profession: 'barmaid',
  gearList: [],
  spellList: [],
  potionList: [],
  stats: [
    {
      name: 'Stamina',
      description: 'The health, fitness and all-round vitality of a character is defined by their stamina. The higher the better. When a character or enemy runs out of stamina in combat, they risk serious injury and are at the mercy of their opponent.',
      value: Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + 12,
    },
    {
      name: 'Luck',
      description: "A character's destiny and fate are represented by luck. At any time during a game session, the games master can ask a character to try their luck to see if things go their way.",
      value: Math.floor(Math.random() * 6) + 1 + 7,
    },
    {
      name: 'Pluck',
      description: "Pluck is a measure of how well a character deals with the stressful, horrifying or terrifying. The higher the value of pluck, the more resilient the character is. They say that the luckiest people are so used to things going their way that they don't know how to deal with the harsh miseries everyone else has to put up with.",
      value: 0,
    },
  ],
  skills: [
    {
      name: 'Appraise',
      description: 'The character has a keen eye. Not only can they appraise items for their worth or providence, they can also assess other people to get a measure of their worth and their apparent trustworthiness.',
      value: 0,
    },
    {
      name: 'Athletics',
      description: "A measure of a character's ability to use their body in feats of movement and coordination, including running, jumping, climbing etc.",
      value: 0,
    },
    {
      name: 'Bargain',
      description: "The character's ability to bargain with others for something they desire, such as a shopkeeper for their wares or an informant for a piece of information.",
      value: 0,
    },
    {
      name: 'Blunt',
      description: 'The use and application of blunt weapons such as clubs, maces and hammers.',
      value: 0,
    },
    {
      name: 'Bow',
      description: 'How to hunt with a bow and hit small targets, plus the care and maintenance of your implements.',
      value: 0,
    },
    {
      name: 'Brawling',
      description: 'A knack for fighting with fist and body, knowing how to move and how to fight dirty.',
      value: 0,
    },
    {
      name: 'Command',
      description: 'Issuing commands and projecting the kind of confidence that gets those orders followed.',
      value: 0,
    },
    {
      name: 'Crossbow',
      description: 'The use of crossbows, implements of war that advertise their users as soldiers or hardened mercenaries.',
      value: 0,
    },
    {
      name: 'Diplomacy',
      description: 'The art of charting a course through the rocky ground of interpersonal relations, getting two opposed sides to compromise and find a way forward.',
      value: 0,
    },
    {
      name: 'Disguise',
      description: 'The character can adopt a gait, voice and mannerisms that disguises their true nature and convinces the casual observer that someone they are not.',
      value: 0,
    },
    {
      name: 'Dodge',
      description: 'The character is able to dodge incoming missiles, be they arrows, stones or rotten fruit.',
      value: 0,
    },
    {
      name: 'Endurance',
      description: 'The character can resist physical hardship and keep going where others fail.',
      value: 0,
    },
    {
      name: 'History',
      description: 'A knowledge of past events of the Kingdom and the realms that surround it, and some of the major personalities that litter history books.',
      value: 0,
    },
    {
      name: 'Incantation',
      description: 'The ability to use magic, to draw symbols in the air with fingers of flame and summon the breath of esoteric power using scrolls.',
      value: 0,
    },
    {
      name: 'Intimidate',
      description: 'The character is able to use their physicality and personality to intimidate others. This does not necessarily mean they are big and imposing, more that they are able to push others around with the strength of their character.',
      value: 0,
    },
    {
      name: 'Language',
      description: 'Understanding enough of a smattering of languages of the Kingdom, the character can figure out what people are saying, even other races.',
      value: 0,
    },
    {
      name: 'Large Blade',
      description: 'This skill covers the application and maintenance of large bladed weapons like both one-handed and two-handed swords.',
      value: 0,
    },
    {
      name: 'Lie',
      description: 'The character is able to tell quick and easy lies, and convince others of their honesty. The use of this skill is often opposed by the Appraise skill.',
      value: 0,
    },
    {
      name: 'Medicine',
      description: 'The character is able to help stabilise wounds and the critical hits that can be suffered in combat. Without some medical assistance, many wounds can fester and deteriorate.',
      value: 0,
    },
    {
      name: 'Navigation',
      description: 'Finding your way along the roads of the Kingdom, let alone the trackless forests, is no mean feat. This character is skilled in choosing the right path.',
      value: 0,
    },
    {
      name: 'Ostler',
      description: 'Riding, tending and maintaining horses is a life skill that this character has learnt. They know how to keep their mount happy and healthy.',
      value: 0,
    },
    {
      name: 'Persuasion',
      description: 'The fine art of getting someone to do what you want. Persuading people assumes that what you want them to do is not against their interests - if it is, the games master may impose a penalty to the test.',
      value: 0,
    },
    {
      name: 'Pole-arm',
      description: 'The character is adept at fighting with the various kinds of pole-arm, both spears and long weapons topped with a blade or axe head.',
      value: 0,
    },
    {
      name: 'Repair',
      description: 'Characters with this skill are mechanically minded, and able to perform repairs either ad-hoc or planned to keep devices and tools operating.',
      value: 0,
    },
    {
      name: 'Sleight-of-hand',
      description: 'The character is able to use distraction and manipulation to perform tricks of prestidigitation, useful in picking pockets and cheating at cards.',
      value: 0,
    },
    {
      name: 'Small Blade',
      description: 'The character is adept at using knives and daggers in combat, nasty weapons in the right hands.',
      value: 0,
    },
    {
      name: 'Spot',
      description: 'With a keen eye and a mind set for detail, the character is able to spot things out of place or otherwise remarkable but hidden in a scene. This skill is often pitted against Stealth when someone is sneaking where they should not be.',
      value: 0,
    },
    {
      name: 'Stealth',
      description: 'Able to make use of cover and shadows, the character is adept at sneaking about. This skill is often pitted against the spot skill of guards and watchmen.',
      value: 0,
    },
    {
      name: 'Streetwise',
      description: 'A knack for knowing the right kind of people to talk to and the right places to go to meet them, this character is knowledgeable in facets of the seedier side of life.',
      value: 0,
    },
    {
      name: 'Survival',
      description: 'How to find a good campsite, find water and forage for food, a character with this skill is adept at surviving in the wilds.',
      value: 0,
    },
    {
      name: 'Swimming',
      description: 'Not many folks can swim, and water is dangerous. This character is able to move about in open water without losing their life.',
      value: 0,
    },
    {
      name: 'Thrown',
      description: 'There is an art to hitting something with a stone, a javelin or a tomato. A character with this skill has spent many an hour honing their aim.',
      value: 0,
    },
    {
      name: 'Career Skill',
      description: "Each career also comes with a skill named after the career itself. This represents all the knowledge and know-how that come from working in that profession, things that aren't covered by the adventuring skills themselves. If a player can persuade the games master that a career skill makes sense in the context of a test in the game, one that is not covered by an adventuring skill, they may use this skill to determine success.",
      value: 0,
    },
  ],
})

export function setCharacter(characterData) {
  character.name = characterData.name || 'Bob the Alchemist'
  character.profession = characterData.profession || 'barmaid'
  character.gearList = characterData.gearList || []
  character.spellList = characterData.spellList || []
  character.potionList = characterData.potionList || []
  character.stats = characterData.stats || [
    {
      name: 'Strength',
      description: 'A measure of physical power and ability to exert force.',
      value: 0,
    },
    {
      name: 'Dexterity',
      description: 'A measure of agility, reflexes, and balance.',
      value: 0,
    },
    {
      name: 'Constitution',
      description: 'A measure of health, stamina, and vital force.',
      value: 0,
    },
    {
      name: 'Intelligence',
      description: 'A measure of mental acuity, information retention, and analytical skill.',
      value: 0,
    },
    {
      name: 'Wisdom',
      description: 'A measure of perception, insight, and intuition.',
      value: 0,
    },
    {
      name: 'Charisma',
      description: 'A measure of personal magnetism, persuasiveness, and leadership ability.',
      value: 0,
    },
  ]
}

export function resetCharacter() {
  character.name = 'Bob the Alchemist'
  character.profession = 'barmaid'
  character.gearList = []
  character.spellList = []
  character.potionList = []
  character.stats.forEach(stat => {
    stat.value = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + (stat.name === 'Luck' ? 7 : 12)
  })
  character.skills.forEach(skill => {
    skill.value = 0
  })
}