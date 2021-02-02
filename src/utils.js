function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function capitalizeMultiple(str) {
  return str.split(" ").map(capitalize).join(" ");
}

module.exports = {
  capitalizeMultiple,
  capitalize,
};
