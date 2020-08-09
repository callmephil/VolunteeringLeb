export const get_file_input_files = (input) => {
  const { multiple, files } = input;
  if (files && files.length) {
    if (multiple) {
      return [...files];
    }
    return files[0];
  }
  return null;
};

export const get_input_value = (input) => {
  const { nodeName, name, type, value, checked } = input;
  if (!name || nodeName === "BUTTON") {
    return null;
  }
  if (type === "checkbox") {
    return !!checked;
  }
  if (typeof value === "undefined" || value === "") {
    return null;
  }
  if (type === "radio") {
    if (!checked) {
      return null;
    }
    return value;
  }
  if (type === "number" || type === "range") {
    if (!value) {
      return 0;
    }
    return parseFloat(value);
  }
  if (type === "date") {
    return new Date(value);
  }
  if (type === "file") {
    const files = get_file_input_files(input);
    if (!files) {
      return null;
    }
    return files;
  }
  return value;
};

export const serialize_form = (form, _keep) => {
  const keep = _keep ? {} : null;
  _keep && _keep.forEach((name) => (keep[name] = true));
  const controls = form.elements;
  const { length } = controls;
  let i = 0;
  const fields = {};
  while (i < length) {
    const input = controls[i++];
    const { name } = input;
    if (!name || input.nodeName === "FIELDSET" || input.nodeName === "BUTTON") {
      continue;
    }
    if (keep && !keep[name]) {
      continue;
    }
    const value = get_input_value(input);
    if(value !== null){
      fields[name] = value;
    }
  }
  return fields;
};

export const handle_submit = (func, keep) => (evt) => {
  evt.preventDefault();
  const form = evt.target
  const data = serialize_form(form, keep);
  func(data, form);
};