const validCVV = cvv => cvv && (cvv.length === 4 || cvv.length === 3);

const atLeastOneLetter = value => /[a-z]+/i.test(value);

const noEmptySpacesOnly = value => value === '' || value.trim().length !== 0;

const emptyOrletters = value => (value.trim() !== '' && /[a-z]+/i.test(value)) || (value.trim() === '');

export {
  atLeastOneLetter,
  emptyOrletters,
  noEmptySpacesOnly,
  validCVV,
};

export default {
  atLeastOneLetter,
  emptyOrletters,
  noEmptySpacesOnly,
  validCVV,
};
