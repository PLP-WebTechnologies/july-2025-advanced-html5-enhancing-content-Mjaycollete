const validateBug = require('../../utils/validateBug');

describe('validateBug', () => {
  test('rejects short title', () => {
    const { isValid, errors } = validateBug({ title: 'ab' });
    expect(isValid).toBe(false);
    expect(errors.title).toBeDefined();
  });

  test('accepts valid input', () => {
    const { isValid, errors } = validateBug({ title: 'A valid title' });
    expect(isValid).toBe(true);
    expect(errors).toEqual({});
  });
});
