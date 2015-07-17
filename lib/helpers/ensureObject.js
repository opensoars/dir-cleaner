/**
 * Ensures the return of an object.
 * If another data type is passed return an empty object.
 * @module lib/helpers/ensureObject
 * @example
 * typeof ensureObject({ a: 'b' }); // 'object'
 * (ensureObject({ a: 'b' })).a; // 'b'
 * typeof ensureObject([]); // 'object' (w/ 0 own properties)
 * typeof ensureObject('a'); // 'object' (w/ 0 own properties)
 *
 * @param obj - Argument that gets data type checked and possibly changed
 */
module.exports = function ensureObject(obj) {
  return typeof obj !== 'object' || obj instanceof Array ? {} : obj;
};