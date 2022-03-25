const passwordValidation = (pass) => {
  return pass.toString().length >= 6 && pass.match(/^(?=.*[A-Z])(?=.*[a-z])/);
};
module.exports = passwordValidation;
