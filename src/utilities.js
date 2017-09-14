const utilities = {}

utilities.randomInt = (min, max) => Math.floor((Math.random() * (max - min)) + min)

utilities.doubleRangeRandom = (min1, max1, min2, max2) =>
  Math.random() > 0.5 ? utilities.randomInt(min1, max1) : utilities.randomInt(min2, max2)

export default utilities
