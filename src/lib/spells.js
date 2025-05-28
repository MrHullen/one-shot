const qualities = [
  'Abnormal',
  'Abominable',
  'Advanced',
  'Ancestral',
  'Ancient',
  'Arcane',
  'Artful',
  'Baleful',
  'Bizarre',
  'Canonical',
  'Celestial',
  'Cerebral',
  'Chaotic',
  'Colourful',
  'Cosmic',
  'Crafty',
  'Cryptic',
  'Curious',
  'Detestable',
  'Dismal',
  'Dreadful',
  'Elder',
  'Eldritch',
  'Enigmatic',
  'Esoteric',
  'Excellent',
  'Exquisite',
  'Extraordinary',
  'Fantastic',
  'Fey',
  'Foul',
  'Galactic',
  'Ghastly',
  'Grand',
  'Grim',
  'Grotesque',
  'Hateful',
  'Hideous',
  'Horrible',
  'Incomparable',
  'Incomprehensible',
  'Inexplicable',
  'Infernal',
  'Ingenious',
  'Inscrutable',
  'Insidious',
  'Iridescent',
  'Lawful',
  'Jocular',
  'Legendary',
  'Loathsome',
  'Magnificent',
  'Majestic',
  'Marvellous',
  'Masterful',
  'Miraculous',
  'Mysterious',
  'Noetic',
  'Noxious',
  'Odious',
  'Ominous',
  'Original',
  'Orthodox',
  'Ostentatious',
  'Otherworldly',
  'Peculiar',
  'Penicious',
  'Phenomenal',
  'Shrouded',
  'Planar',
  'Planetary',
  'Preeminent',
  'Primal',
  'Primeval',
  'Primordial',
  'Prodigious',
  'Psychedelic',
  'Remarkable',
  'Resplendent',
  'Royal',
  'Sacred',
  'Spicy',
  'Sinister',
  'Dripping',
  'Splendid',
  'Subtle',
  'Superior',
  'Supreme',
  'Licorice',
  'Congealed',
  'True',
  'Uncanny',
  'Unfathomable',
  'Unnatural',
  'Unorthodox',
  'Unspeakable',
  'Vile',
  'Whimsical',
  'Wondrous',
  'Wretched',
]

const effects = [
  'Absorbing',
  'Accelerating',
  'Chasing',
  'Amusing',
  'Animating',
  'Armoring',
  'Avenging',
  'Awakening',
  'Banishing',
  'Beautifying',
  'Bewildering',
  'Binding',
  'Blossoming',
  'Burning',
  'Charming',
  'Cleansing',
  'Commanding',
  'Communicating',
  'Concealing',
  'Condemning',
  'Corroding',
  'Corrupting',
  'Crushing',
  'Darkening',
  'Dazzling',
  'Deafening',
  'Deciphering',
  'Diminishing',
  'Disguising',
  'Dispelling',
  'Draining',
  'Duplicating',
  'Electrifying',
  'Emboldening',
  'Enraging',
  'Enticing',
  'Enthraling',
  'Excruciating',
  'Expanding',
  'Foreseeing',
  'Freezing',
  'Fusing',
  'Hardening',
  'Haunting',
  'Healing',
  'Identifying',
  'Illuminating',
  'Imprisoning',
  'Infecting',
  'Intoxicating',
  'Irritating',
  'Invading',
  'Levitating',
  'Liquefying',
  'Maddening',
  'Menacing',
  'Mesmerizing',
  'Mindreading',
  'Mocking',
  'Monitoring',
  'Multiplying',
  'Mutating',
  'Namecasting',
  'Nullifying',
  'Pacifying',
  'Persuading',
  'Petrifying',
  'Piercing',
  'Preserving',
  'Pummelling',
  'Putrefying',
  'Refreshing',
  'Regenerating',
  'Repelling',
  'Retrieving',
  'Revealing',
  'Saddening',
  'Sanctifying',
  'Scrying',
  'Sealing',
  'Shielding',
  'Silencing',
  'Slicing',
  'Spawning',
  'Springing',
  'Strangling',
  'Summoning',
  'Teleporting',
  'Terrifying',
  'Transmuting',
  'Stretching',
  'Transporting',
  'Vaporising',
  'Warding',
  'Wearying',
  'Withering',
]

const elements = ['Acid', 'Amber', 'Ash', 'Bile', 'Blood', 'Blossom', 'Bone', 'Brass', 'Brimstone', 'Brine', 'Butter', 'Chalk', 'Chaos', 'Clay', 'Cloud', 'Cold', 'Crystal', 'Darkness', 'Death', 'Birds', 'Dream', 'Dust', 'Crepe', 'Flame', 'Flesh', 'Foam', 'Fog', 'Onion', 'Frost', 'Fume', 'Fungus', 'Ghost', 'Glass', 'Glue', 'Gravel', 'Hail', 'Heat', 'Honey', 'Ice', 'Incense', 'Ink', 'Iron', 'Ivory', 'Lava', 'Lead', 'Leaf', 'Light', 'Lightning', 'Marmalade', 'Unicorn horn', 'Miasma', 'Moss', 'Mud', 'Nectar', 'Oatmeal', 'Obsidian', 'Oil', 'Paint', 'Paper', 'Perfume', 'Plague', 'Poison', 'Pollen', 'Quicksilver', 'Radiation', 'Rain', 'Root', 'Rot', 'Salt', 'Sand', 'Sap', 'Shadow', 'Silk', 'Slime', 'Smoke', 'Snow', 'Soot', 'Spark', 'Speed', 'Spore', 'Steam', 'Stench', 'Stone', 'Storm', 'Sugar', 'Syrup', 'Taffy', 'Tar', 'Tea', 'Tears', 'Thorn', 'Vine', 'Void', 'Water', 'Wax', 'Wind', 'Wine', 'Wood']

const forms = ['Cow', 'Arc', 'Archer', 'Armour', 'Arrow', 'Aura', 'Avalanche', 'Axe', 'Beacon', 'Beam', 'Beast', 'Blade', 'Blast', 'Blob', 'Bolt', 'Bubble', 'Cage', 'Carriage', 'Chain', 'Chariot', 'Circle', 'Cloak', 'Codpiece', 'Cloud', 'Coil', 'Colossus', 'Column', 'Cone', 'Crown', 'Cube', 'Disk', 'Dragon', 'Eye', 'Fang', 'Finger', 'Fissure', 'Fist', 'Flood', 'Fly', 'Fountain', 'Gate', 'Gaze', 'Geyser', 'Gloves', 'Guardian', 'Hammer', 'Hand', 'Hawk', 'Horn', 'Hound', 'Key', 'Knife', 'Knight', 'Mask', 'Bucket', 'Icon', 'Monolith', 'Kobold', 'Mouth', 'Eye stalks', 'Path', 'Pit', 'Pool', 'Pyramid', 'Ray', 'Rune', 'Sanctuary', 'Serpent', 'Servant', 'Shield', 'Skeleton', 'Skin', 'Song', 'Spear', 'Sphere', 'Spider', 'Spike', 'Spray', 'Staff', 'Steed', 'Storm', 'Strike', 'Monolith', 'Spiral', 'Tangle', 'Bellows', 'Torrent', 'Touch', 'Tree', 'Tunnel', 'Vortex', 'Wall', 'Wave', 'Baton', 'Web', 'Wheel', 'Whip', 'Word', 'Zone']

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function getSpell() {
  const quality = getRandom(qualities)
  const effect = getRandom(effects)
  const element = getRandom(elements)
  const form = getRandom(forms)

  // Generate a random number between 1 and 6
  const d6Roll = Math.floor(Math.random() * 6) + 1

  let name = ''

  switch (d6Roll) {
    case 1:
      name = `${element} ${form}`
      break
    case 2:
      name = `${effect} ${form}`
      break
    case 3:
      name = `${effect} ${element}`
      break
    case 4:
      name = `The ${quality} ${element} ${form}`
      break
    case 5:
      name = `The ${quality} ${effect} ${form}`
      break
    case 6:
      name = `The ${quality} ${effect} ${element}`
      break
    default:
      name = 'Unknown Formula'
      break
  }

  return name
}

export async function getSpellDescription(spellName) {
  const response = await fetch('ai/api/spell-description', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ spellName: spellName }),
  })

  let { description } = await response.json()

  description = description.replace(/^"|"$/g, '')

  return description
}