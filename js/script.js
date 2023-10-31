document.addEventListener("DOMContentLoaded", function() {
    // Выберите секцию
    const section = document.querySelector(".first__page__logo");
  const body = document.querySelector("body");
  const mainElem = document.querySelector(".img__2");


 const showLinks = document.querySelectorAll('.showLink');
//  showLinks.forEach(function (showLink) {
//   showLink.addEventListener('click', function (event) {
//       event.preventDefault();

//       // Получаем идентификатор элемента, который нужно скрыть/показать
//       const targetId = showLink.getAttribute('data-target');
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//           toggleElementVisibility(targetElement);
//       }
//   });





  
// });

function toggleElementVisibility(element) {
  if (element.hidden) {
      element.removeAttribute('hidden');
  } else {
      element.setAttribute('hidden', 'true');
  }
}
    // Функция для скрытия секции с анимацией
    function hideSection() {
      section.classList.add("hidden");
     
    }
    function removeSection() {
        section.remove();
        body.style.backgroundColor = "#A8A4A4";
        unHiddenMain();
      }
    function unHiddenMain(){
        mainElem.classList.add("unhidden");
    }
      function unHiddenMain(){
        mainElem.classList.add("unhidden");
    }
    // Вызовите функцию после задержки в 2 секунды
    setTimeout(hideSection, 2000); // 2000 миллисекунд (2 секунды)
    setTimeout(removeSection, 3000); // 2000 миллисекунд (2 секунды)
  });