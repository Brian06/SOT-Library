const activeClassesHandler = () => {
  const optionsSelectors = [
    '.js-BeenVerified-list a',
    '.js-PeopleLooker-list a',
    '.js-JavaScript-list a',
  ];
  const selectors = optionsSelectors.join(', ');

  $(selectors).on('click', (e) => {
    const currentElement = e.currentTarget;
    const currentHash = currentElement.hash;
    const currentParent = $(currentElement).parent().parent().parent().find("a").eq(0);
    const selectorsToChange = [
      '.js-BeenVerified-nav',
      '.js-BeenVerified-list a',
      '.js-PeopleLooker-nav',
      '.js-PeopleLooker-list a',
      '.js-JavaScript-nav',
      '.js-JavaScript-list a',
    ];
    const selectors = selectorsToChange.join(', ');
    $(currentElement).tab('show');
    $(selectors).removeClass('active');
    $(`a[href="${currentHash}"]`).addClass('active');

    if (currentParent.hasClass('js-BeenVerified-nav')) {
      $('.js-BeenVerified-nav').addClass('active');
    } else if (currentParent.hasClass('js-PeopleLooker-nav')) {
      $('.js-PeopleLooker-nav').addClass('active');
    } else if (currentParent.hasClass('js-JavaScript-nav')) {
      $('.js-JavaScript-nav').addClass('active');
    }
  });
}

const initialize = () => {
  activeClassesHandler();
}

export { initialize };
