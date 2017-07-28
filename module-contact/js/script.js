let   contactInfoDiv = $('.contact-contacts .contact-info'),
      arrows         = $('.contact-link'),
      contactDetailContent = $('.contact-detail .contact-content');

arrows.on('click', function() {
  // var $next = $('.contact-info.active').removeClass('active').next('.active');
  $('.active + .contact-info, .contact-info:eq(0)')
      .last().addClass('active')
      .siblings('.active').removeClass('active');

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
});

contactInfoDiv.on('click', function() {
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');

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
});
