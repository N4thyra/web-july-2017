let   contactInfoDiv = $('.contact-contacts .contact-info'),
      leftArrow         = $('.contact-link:first-of-type'),
      rightArrow         = $('.contact-link:last-of-type'),
      contactDetailContent = $('.contact-detail .contact-content');


leftArrow.on('click', function() {
  // var $next = $('.contact-info.active').removeClass('active').next('.active');

  let current = $('.contact-info.active'),
      prev = current.prev('.contact-info');
  console.log(prev.length, prev)
  if(prev.length){
      current.removeClass('active');
      prev.addClass('active');
  }

  updateContactInfo();

});

rightArrow.on('click', function() {
  // var $next = $('.contact-info.active').removeClass('active').next('.active');

  let current = $('.contact-info.active'),
      next = current.next('.contact-info');
  if(next.length){
      current.removeClass('active');
      next.addClass('active');
  }

  updateContactInfo();

});


contactInfoDiv.on('click', function() {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');

  updateContactInfo();

});

// makes all the necessary updates on the right hand side
function updateContactInfo() {
  // getting data from left side and saving them into a variable
  let img = $('.contact-info.active').find('img').attr('src');
  let name = $('.contact-info.active').find('.contact-name').text();
  let position = $('.contact-info.active').find('.contact-position').text();
  let email = $('.contact-info.active').find('.contact-email').text();
  let phone = $('.contact-info.active').find('.contact-phone').text();

  // changing data in contact-detail div
  $('.contact-detail').find('img').attr('src', img);  // changing avatar
  $('.contact-detail .contact-name').text(name); // changing name
  $('.contact-detail .contact-position').text(position); //changing position
  $('.contact-detail .contact-phone').text(phone); // changing cell
  $('.contact-detail .contact-email').text(email); // changing e-mail
}
