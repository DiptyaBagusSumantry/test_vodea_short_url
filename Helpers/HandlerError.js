function handleError(res, error) {
  if (error.errors) {
    return res.status(400).json({
      code: 400,
      message: error.errors[0].message,
    });
  } else {
    return res.status(500).json({
      code: 500,
      message: error.message,
    });
  }
}
function handleCreate(res, data) {
  res.status(201).json({
    code: 201,
    message: "Success Create Data",
    data: data
  });
}
function handleRedirect(res, data) {
  res.redirect(data);
}
function handleExpaired(res, data) {
  res.status(400).json({
    code: 400,
    message: "url expaired",
  });
}

module.exports = {
  handleError,
  handleCreate,
  handleRedirect,
  handleExpaired,
};
