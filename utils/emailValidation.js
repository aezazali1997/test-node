const validateEmail = (mail) => {
  if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return true;
  }
  return false;
};
module.exports = validateEmail;
