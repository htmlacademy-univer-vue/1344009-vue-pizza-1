import dough from "../common/data/doughSizes.js";
import ingredients from "../common/data/ingredients.js";
import sauces from "../common/data/sauces.js";
import sizes from "../common/data/sizes.js";

const translations = {
  ...dough,
  ...ingredients,
  ...sauces,
  ...sizes,
};

const translateNameToEng = (name) => {
  const translation = translations[name];
  if (!translation) {
    console.warn(`Translation for "${name}" not found.`);
    return name;
  }
  return translation;
};

const translateNameToRus = (name) => {
  const translation = getKey(translations, name);
  if (!translation) {
    console.warn(`Translation for "${name}" not found.`);
    return name;
  }
  return translation;
};

function getKey(obj, value) {
  if (typeof value === "object") {
    value = JSON.stringify(value);
    return Object.keys(obj).find((key) => JSON.stringify(obj[key]) === value);
  } else return Object.keys(obj).find((key) => obj[key] === value);
}

export { translateNameToEng, translateNameToRus };
