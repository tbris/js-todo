export { submitNew };

function submitNew(e, properties, reqProperties, builderFunction) {
  e.preventDefault();
  let input = e.target.elements;
  let props = parseProps(properties, input);
  if (!evaluate(props, reqProperties, input)) {
    builderFunction(props);
  }
  return false;
}

function parseProps(props, target) {
  let parsed = {};
  props.forEach(prop => {
    if (target[prop] instanceof RadioNodeList) {
      parsed[prop] = getRadioProperty(target[prop])
    }
    parsed[prop] = target[prop].value
  });
  return parsed;
}

function evaluate(props, reqProps, elements) {
  let warnings = [];
  reqProps.forEach(prop => !props[prop] ? warnings.push(elements[prop]) : "");
  warnings.forEach(alertWarning);
  return warnings.length;
}

function alertWarning(element) {
  element.classList.add("form-warning");
  setTimeout(() => element.classList.remove("form-warning"), 2000);
}

function getRadioProperty(collection) {
  return Array.from(collection).find(item => item.checked);
}
