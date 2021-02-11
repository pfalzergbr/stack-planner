export const clearForm = (form) => {
  for (const key in form) {
    form[key].val = "";
  }
};

export const validateForm = (form) => {
  console.log(form);
  let formIsValid = true;
  for (const key in form) {
    form[key].error = null;
    if (form[key].required === true && form[key].val.length === 0) {
      form[key].error = "This field is required";
      formIsValid = false;
    }
    if (form[key].minLength && form[key].val.length< form[key].minLength) {
      form[
        key
      ].error = `You need to enter minimum ${form[key].minLength} characters`;
      formIsValid = false;
    }
  }
  return formIsValid;
};
