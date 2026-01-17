var isTypedArray = require("is-typed-array");

module.exports = function isNotTypedArray(value) {
  return !isTypedArray(value);
}
