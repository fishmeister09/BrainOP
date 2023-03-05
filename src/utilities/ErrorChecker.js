const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const ErrorCheck = (data) => {
  const { name, email } = data;
  let errorsArray = [];
  if (name.length < 3) {
    errorsArray.push('name');
  }
  if (!validateEmail(email)) {
    errorsArray.push('email');
  }

  return errorsArray;
};
