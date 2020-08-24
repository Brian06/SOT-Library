

const initialize = () => {


  $('.js-BeenVerified-list a, .js-PeopleLooker-list a').on('click', (e) => {
    const currentElement = e.currentTarget;
    const currentHash = currentElement.hash;
    $(currentElement).tab('show');
    $('.js-BeenVerified-list a, .js-PeopleLooker-list a').removeClass('active');
    $(`a[href="${currentHash}"]`).addClass('active');    
  });

  //TO DO
  $('.js-BeenVerified-nav, .js-PeopleLooker-nav').on('click', (e) => {
    $('.js-BeenVerified-nav, .js-PeopleLooker-nav').removeClass('active');
    const currentElement = e.currentTarget;
    $(currentElement).addClass('active');
  });

  

  
}

export { initialize };
