const activeClassesFunctionality = () => {
  $('.js-BeenVerified-list a, .js-PeopleLooker-list a').on('click', (e) => {
    const currentElement = e.currentTarget;
    const currentHash = currentElement.hash;
    const currentParent = $(currentElement).parent().parent().parent().find("a").eq(0);
    const selectorsToChange = [
      '.js-BeenVerified-list a',
      '.js-PeopleLooker-list a',
      '.js-BeenVerified-nav',
      '.js-PeopleLooker-nav'
    ];
    const selectors = selectorsToChange.join(', ');
    $(currentElement).tab('show');
    $(selectors).removeClass('active');
    $(`a[href="${currentHash}"]`).addClass('active');

    if (currentParent.hasClass('js-BeenVerified-nav')) {
      $('.js-BeenVerified-nav').addClass('active');
    } else if (currentParent.hasClass('js-PeopleLooker-nav')) {
      $('.js-PeopleLooker-nav').addClass('active');
    }
  });
}

const initialize = () => {
  activeClassesFunctionality();
}

export { initialize };
