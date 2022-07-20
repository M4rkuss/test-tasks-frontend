$(() => {
  let idCounter = 1;
  $('#sendBtn').click(function (e) {
    let textValue = $('form textarea').val();
    let newTextValue = textValue[0].toUpperCase() + textValue.slice(1);
    e.preventDefault();
    $.ajax('http://universities.hipolabs.com/search', {
      url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
      data: $('form textarea').serialize(),
      type: 'GET',
      beforeSend: function() {
        $('.dark-block').addClass('active');
        $('.lds-roller').css('display', 'inline-block');
      },
      success: function (data) {
        $('.dark-block').removeClass('active');
        $('.lds-roller').css('display', 'none');
        if ($(window).width() < 850) {
          $('table').css('display', 'block');
        } else $('table').css('display', 'table');
        $.each(data, function (key, value) {
          if (value.country === newTextValue) {
            $('table tbody').append(`<tr><td>${idCounter++}</td><td>${value.alpha_two_code}</td><td>${value.state_province}</td><td>${value.country}</td><td>${value.name}</td><td><a href="${value.web_pages}" target="_blank">${value.web_pages}</a></td><td><input type="checkbox"></td><tr`)
          }
        });
      },
      fail: function () {
        console.log('fail');
      }
    })
  });

  let checkboxCounter = 0;
  $(document).on('click', 'input', function () {
    if ($(this).is(":checked")) {
      checkboxCounter++
    } else checkboxCounter--
    $('#checkboxCounter').text(checkboxCounter);
  })

  $('#resetBtn').click(function (e) {
    idCounter = 1;
    e.preventDefault();
    $('table tbody tr').remove();
    $('table').css('display', 'none');
  })
})