function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function capitalizeMultiple(str) {
  return str.split(" ").map(capitalize).join(" ");
}

function fieldTransform(obj, result) {
  let values = Object.values(obj);
  for (let value of values) {
    if (typeof value !== "string" && typeof value !== "number") {
      fieldTransform(value, result);
    } else if (typeof value === "string") {
      result.push(value.toLowerCase());
    } else if (typeof value === "number") {
      result.push(value.toString().toLowerCase());
    }
  }
  return result;
}

function typeAheadFilter(data, searchString) {
  let finalResult = [];
  const searchTrue = (entry) => entry.includes(searchString);
  for (let d of data) {
    const stringyArray = fieldTransform(d, []);
    if (stringyArray.some(searchTrue)) {
      finalResult.push(d);
    }
  }
  return finalResult;
}

module.exports = {
  capitalizeMultiple,
  capitalize,
  typeAheadFilter,
};
