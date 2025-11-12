function validateBug(data) {
  const errors = {};
  if (!data.title || data.title.trim().length < 3) {
    errors.title = 'Title must be at least 3 characters';
  }
  // other validations as needed
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

module.exports = validateBug;
