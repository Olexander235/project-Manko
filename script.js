let slideIndex = 0;
const slides = document.querySelectorAll(".mySlides");
const dotsContainer = document.createElement("div");
dotsContainer.classList.add("dot-container");

// Создаём индикаторы (точки) для каждого слайда
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

// Добавляем индикаторы в слайдер
document.querySelector(".slideshow-container").appendChild(dotsContainer);
const dots = document.querySelectorAll(".dot");

function showSlides() {
    slides.forEach((slide, i) => {
        slide.style.display = "none";
        dots[i].classList.remove("active");
    });

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// Функция для смены слайда по кнопкам
function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides();
}

// Функция для перехода к конкретному слайду
function goToSlide(n) {
    slideIndex = n;
    showSlides();
}

// Автоматическое переключение слайдов
function autoSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
    setTimeout(autoSlide, 5000);
}

// Привязываем кнопки "Назад" и "Вперёд"
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next").addEventListener("click", () => plusSlides(1));

// Запускаем слайдер
showSlides();
setTimeout(autoSlide, 5000);

        function showSlide(newIndex) {
            const slides = slider.children.length;
            if (newIndex < 0) {
                index = slides - 1;
            } else if (newIndex >= slides) {
                index = 0;
            } else {
                index = newIndex;
            }
            slider.style.transform = `translateX(-${index * 100}%)`;
        }

        prev.addEventListener('click', () => showSlide(index - 1));
        next.addEventListener('click', () => showSlide(index + 1));

        setInterval(() => showSlide(index + 1), 5000);

        function toggleMenu() {
            const navbar = document.querySelector('.navbar');
            navbar.classList.toggle('show'); // Добавляем/удаляем класс "show" для раскрытия меню
        }




        document.addEventListener("DOMContentLoaded", function () {
            const burgerMenu = document.querySelector(".burger-menu");
            const navbar = document.querySelector(".navbar");
    
            burgerMenu.addEventListener("click", () => {
                navbar.classList.toggle("active");
                burgerMenu.classList.toggle("open");
            });
        });


        document.querySelectorAll(".projcard-description").forEach(function(box) {
            $clamp(box, {clamp: 6});
        });
        

// Переключение состояния выпадающего меню
document.querySelector('.language-toggle').addEventListener('click', function() {
  const languageSelector = document.querySelector('.language-selector');
  languageSelector.classList.toggle('active');
});


document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Collect form data
    const formData = new FormData(event.target);

    // Send the form data using fetch API
    fetch('/action_page.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())  // Assuming the server returns a JSON response
    .then(data => {
      console.log('Success:', data);
      alert('Form submitted successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error submitting the form.');
    });
  });

        



