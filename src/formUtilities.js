function getRadioProperty(collection) {
  return Array.from(collection).find((item) => item.checked);
}

function parseProps(props, target) {
  const parsed = {};
  props.forEach((prop) => {
    if (target[prop] instanceof RadioNodeList) {
      parsed[prop] = getRadioProperty(target[prop]);
    }
    parsed[prop] = target[prop].value;
  });
  return parsed;
}

function alertWarning(element) {
  let container = element;
  if (container.type === 'hidden') container = container.nextElementSibling;
  container.classList.add('form-warning');
  setTimeout(() => container.classList.remove('form-warning'), 2000);
}

function evaluate(props, reqProps, elements) {
  const warnings = [];
  reqProps.forEach((prop) => (!props[prop] ? warnings.push(elements[prop]) : ''));
  warnings.forEach(alertWarning);
  return warnings.length;
}

function submitNew(e, properties, reqProperties, builderFunction) {
  e.preventDefault();
  const input = e.target.elements;
  const props = parseProps(properties, input);
  if (!evaluate(props, reqProperties, input)) {
    builderFunction(props);
  }
  return false;
}

export default submitNew;
