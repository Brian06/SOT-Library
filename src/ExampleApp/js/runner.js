const setClickEvent = () => {
  const button = document.querySelector('.js-test-button');
  button.addEventListener('click', () => {
    console.log('saadasdsad');
  });
};

const initialize = () => {
  setClickEvent()
}

export { initialize };
