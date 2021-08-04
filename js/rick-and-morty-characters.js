const isHumanAndAlive = character =>
  character.species === 'Human' && character.status === 'Alive'

export const getLivingHumans = characters => characters.filter(isHumanAndAlive)

const justName = character => character.name

export const getCharacterNames = characters => characters.map(justName)

const justNameAndOrigin = character => ({
  name: character.name,
  origin: character.origin.name,
})

export const getNameAndOrigin = characters => characters.map(justNameAndOrigin)

const getNameAndOriginAndMaybeSpecies = characters =>
  characters.map(character => {
    if (character.species !== 'Human') {
      return {
        name: character.name,
        origin: character.origin.name,
        species: character.species,
      }
    }
    return {
      name: character.name,
      origin: character.origin.name,
    }
  })
