function validateZip(req, res, next) {
  const zip = req.params.zip;
  const zipRegex = /^\d{5}$/;

  if (zipRegex.test(zip)) {
    next();
  } else {
    next(`Zip (${zip}) is invalid!`);
  }
}

module.exports = validateZip;
