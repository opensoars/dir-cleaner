/**
 * Ensures the return of an object.
 * If another data type is passed return an empty object.
 *
 * @param obj - Argument that gets data type checked
 * @module lib/helpers/ensureObject
 */
module.exports = function ensureObject(obj) {
  return typeof obj !== 'object' || obj instanceof Array ? {} : obj;
};