import skills from './parts/skills.js'

export const user = $state({
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
})

function getRandomStats() {
  const stamina = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1 + 12
  const luck = Math.floor(Math.random() * 6) + 1 + 7
  const pluck = 20 - luck
  return [
    {
      name: 'Stamina',
      description: 'The health, fitness and all-round vitality of a character is defined by their stamina. The higher the better. When a character or enemy runs out of stamina in combat, they risk serious injury and are at the mercy of their opponent.',
      value: stamina,
    },
    {
      name: 'Luck',
      description: "A character's destiny and fate are represented by luck. At any time during a game session, the games master can ask a character to try their luck to see if things go their way.",
      value: luck,
    },
    {
      name: 'Pluck',
      description: "Pluck is a measure of how well a character deals with the stressful, horrifying or terrifying. The higher the value of pluck, the more resilient the character is. They say that the luckiest people are so used to things going their way that they don't know how to deal with the harsh miseries everyone else has to put up with.",
      value: pluck,
    },
  ]
}

export const character = $state({
  name: 'Bob the Alchemist',
  profession: 'barmaid',
  notes: '',
  gearList: [],
  spellList: [],
  potionList: [],
  stats: getRandomStats(),
  skills: skills,
})

export function resetCharacter() {
  character.name = 'Bob the Alchemist'
  character.profession = 'barmaid'
  character.notes = ''
  character.gearList = []
  character.spellList = []
  character.potionList = []
  character.stats = getRandomStats()
  character.skills.forEach((skill) => {
    skill.value = 0
  })
}
