export const isObject = obj => typeof obj !== "undefined" && obj.constructor.name === "Object"; // return true or false

export const getArrayOfCode = obj => {
  return obj.map(value => {
    return parseInt(value.code);
  });
};

export const renameObjectKey = (obj, propreties = [{ origin: "", by: "" }]) => {
  let newObj = JSON.stringify(obj);
  for (const { origin, by } of propreties) {
    // Make sure it's a key...
    newObj = newObj.replace(`"${origin}":`, `"${by}":`);
  }
  return JSON.parse(newObj);
};

export const getAccessToken = token => {
  const accessString = localStorage.getItem("JWT");
  console.log(accessString);
  if (token && typeof token !== 'undefined')
    return token;
  else if (accessString && typeof accessString !== 'undefined')
    return accessString;
  else 
  {
    console.warn("getAccesstoken: No token provided");
    return null;
  }
};

// https://gist.github.com/jherax/f11d669ba286f21b7a2dcff69621eb72
export const multiFilter = (list, filters) => {
  return list.filter(props => {
    return Object.entries(filters).every(([filterProperty, filterValues]) => {
      switch (Object.prototype.toString.call(props[filterProperty])) {
        case "[object Object]":
          return Object.entries(filterValues).every(([extFilterProperty, extFilterValue]) => {
            return (
              new Map(Object.entries(props[filterProperty])).get(extFilterProperty) ===
              extFilterValue
            );
          });
        case "[object Array]":
          return props[filterProperty].some(propValue => {
            return filterValues.includes(propValue);
          });

        default:
          return filterValues.includes(props[filterProperty]);
      }
    });
  });
};
