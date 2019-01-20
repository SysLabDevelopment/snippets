/** 
 * Рандомное целое ∈ [min, max] 
 * 
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function randomInteger(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

/**
 *  Рандомное вещественное
 * 
 * @param {number} max
 * @returns {number}
 */
const randomReal = randomInteger.bind(null, 1);

/**
 *  Метод массива .random()
 *
 * @returns рандомный элемент массива
 */
Array.prototype.random = function(){
  return this[randomInteger(0, this.length - 1)];
}