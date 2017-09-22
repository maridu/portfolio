// Сворачивание мобильного меню при клике на ссылку
var menuLinks = document.querySelectorAll('.main-nav .menu__link');

for (var i = 0; i < menuLinks.length; i++) {
  var menuLink = menuLinks[i];
  var menuToggle = document.querySelector('.main-nav__toggle');
  menuLink.addEventListener('click', function() {
    menuToggle.checked = false;
  })
}

// Валидация формы
var feedbackForm = document.querySelector('.feedback__form');
var submitButton = document.querySelector('.feedback__btn');
var fields = document.querySelectorAll('.field');

function isAnyError(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains('error')) {
      return true
    }
  }
  return false;
}

function removeValidation(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains('error')) {
      arr[i].classList.remove('error');
    }
  }
}

function isEmpty(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (!arr[i].value) {
      arr[i].classList.add('error');
    }
  }
}


submitButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  
  removeValidation(fields);
  
  isEmpty(fields);

  if(!isAnyError(fields)) {
    feedbackForm.submit();
  }
  
});






