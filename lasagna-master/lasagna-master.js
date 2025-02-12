/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(minutes) {
  switch (minutes) {
    case undefined:
    case null:
      return 'You forgot to set the timer.'
    case 0:
      return 'Lasagna is done.'
    default:
      return 'Not done, please wait.'
  }
}

export function preparationTime(layers, averageTime = 2) {
  return layers.length * averageTime
}

export function quantities(layers) {
  const count = function (type) {
    return layers.filter((layer) => layer === type).length
  }

  return { noodles: 50 * count('noodles'), sauce: 0.2 * count('sauce') }
}

export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1]
  myList.push(secretIngredient)
}

export function scaleRecipe(recipe, portions) {
  const scaled = {}
  for (const key in recipe) {
    scaled[key] = (portions / 2) * recipe[key]
  }
  return scaled
}
