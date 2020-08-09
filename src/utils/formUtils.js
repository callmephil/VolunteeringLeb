/**
 * Returns the value of a file input element
 * @param {HTMLInputElement} input the file input
 * @returns {File|File[]} either an array of files, or a file, depending on 
 *                        the value of `multiple`. If an array, this is a normal
 *                        `Array`, NOT a `FileList`
 */
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

/**
 * Extract value from an input.
 * Buttons, fieldsets, and such return null.
 * @param {HTMLInputElement|HTMLTextAreaElement} input 
 * @returns {string|number|Date|bool|File|File[]} the value of the input
 */
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

/**
 * Serializes form fields.
 * 
 * Values get properly extracted: file inputs will return arrays of files (or one file if
 * `multiple` is not `true`), dates will return dates, numbers and ranges will return numbers, and so on.
 * 
 * The serialization is relatively simple and doesn't take into account nested forms, 
 * fieldsets, or names with `[]`.
 * 
 * Empty fields will be ignored
 * 
 * @param {HTMLFormElement} form a form to serialize. Must be a real DOM Node, not a React element
 * @param {string[]} _keep Optional, an array of field names to keep. If not provided, all fields will be returned
 * @returns {Object} a data object with field names for keys, and their values
 */
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

/**
 * Creates an onSubmit handler suitable for a form.
 * Stops the form from submitting, serializes all the fields, including files,
 * and runs the provided function.
 * 
 * Values get properly extracted: file inputs will return arrays of files (or one file if
 * `multiple` is not `true`), dates will return dates, numbers and ranges will return numbers, and so on.
 * 
 * The serialization is relatively simple and doesn't take into account nested forms, 
 * fieldsets, or names with `[]`.
 * 
 * Empty fields will be ignored
 * 
 * @param {Function} func a function to run after handling the submit. Receives a data object and the form
 * @param {string[]} keep Optional, an array of field names to keep. If not provided, all fields will be returned
 * @returns {(evt)=>void} an onSubmit method
 */
export const handle_submit = (func, keep) => (evt) => {
  evt.preventDefault();
  const form = evt.target
  const data = serialize_form(form, keep);
  func(data, form);
};