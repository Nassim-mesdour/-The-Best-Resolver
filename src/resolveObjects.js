import _set from "lodash/set";

// chellenged myself to reinvent the lodash get 😀, but not the set 😴
const get = (object, path) => {
  const pathLocations = path.split(".");
  const currentLocation = pathLocations[0];

  const value = object[currentLocation];

  if (!value) return undefined;
  if (value !== undefined && pathLocations.length === 1) return value;

  return get(value, pathLocations.slice(1).join("."));
};

const resolveObjects = (inputObject) => {
  let outputObject = {};

  // [ "a", { b: { c: "z" } } ] , [ "a.b.d", "y" ]
  const [lettersTree, lettersSerie] = Object.entries(inputObject);

  // { a : { b: { c: "z" } } }
  outputObject = {
    [lettersTree[0]]: { ...lettersTree[1] },
  };

  const lettersSeriePath = lettersSerie[0];

  if (get(outputObject, lettersSeriePath)) {
    return outputObject;
  }

  _set(outputObject, lettersSeriePath, lettersSerie[1]);

  return outputObject;
};

export default resolveObjects;
