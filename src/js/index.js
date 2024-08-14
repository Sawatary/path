import '../scss/styles.scss'
import '../scss/header.scss'
import '../scss/main.scss'
import '../scss/footer.scss'
import '../scss/sidebar.scss'
import '../scss/swiper1.scss'
import '../scss/swiper2.scss'
import '../scss/swiper3.scss'
import '../scss/feedback.scss'
import '../scss/product.scss'

document
  .getElementById('services__link')
  .addEventListener('click', function () {
    const svg = document.getElementById('mySVG')
    svg.classList.toggle('flipped')
  })

document.getElementById('toggleBtn').addEventListener('click', function () {
  const svg = document.getElementById('mySVG1')
  svg.classList.toggle('flipped')
})

if (innerWidth < 768) {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1.5,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

document.getElementById('toggleBtn').addEventListener('click', function () {
  const width = window.innerWidth

  if (width >= 1440) {
    // Показать/скрыть слайды с 9 по 10
    const hiddenSlides1440 = document.querySelectorAll('.hidden-slide-768')
    hiddenSlides1440.forEach((slide) => {
      slide.style.display =
        slide.style.display === 'none' || slide.style.display === ''
          ? 'flex'
          : 'none'
    })
  } else {
    // Показать/скрыть слайды с 7 по 8
    const hiddenSlides768 = document.querySelectorAll('.hidden-slide')
    hiddenSlides768.forEach((slide) => {
      slide.style.display =
        slide.style.display === 'none' || slide.style.display === ''
          ? 'flex'
          : 'none'
    })
  }

  // Переключаем текст кнопки
  this.textContent =
    this.textContent === 'Показать еще' ? 'Скрыть' : 'Показать еще'
})

document.getElementById('toggleBtn2').addEventListener('click', function () {
  const width = window.innerWidth

  if (width >= 1440) {
    // Показать/скрыть слайды с 9 по 10
    const hiddenSlides1440 = document.querySelectorAll(
      '.hidden-technology-1440'
    )
    hiddenSlides1440.forEach((slide) => {
      slide.style.display =
        slide.style.display === 'none' || slide.style.display === ''
          ? 'flex'
          : 'none'
    })
  } else {
    // Показать/скрыть слайды с 7 по 8
    const hiddenSlides768 = document.querySelectorAll('.hidden-technology')
    hiddenSlides768.forEach((slide) => {
      slide.style.display =
        slide.style.display === 'none' || slide.style.display === ''
          ? 'flex'
          : 'none'
    })
  }

  // Переключаем текст кнопки
  this.textContent =
    this.textContent === 'Показать еще' ? 'Скрыть' : 'Показать еще'
})

document.getElementById('toggleBtn3').addEventListener('click', function () {
  const hiddenText = document.querySelectorAll('.hidden__p')
  hiddenText.forEach((text) => {
    text.style.display =
      text.style.display === 'none' || text.style.display === ''
        ? 'flex'
        : 'none'
  })
  this.textContent = this.textContent === 'Читать еще' ? 'Скрыть' : 'Читать еще'
})

document.getElementById('menu-button').onclick = function () {
  document.querySelector('.container').style.display = 'flex'
  document.body.classList.add('body-no-scroll')
}

document.getElementById('close-button').onclick = function () {
  document.querySelector('.container').style.display = 'none'
  document.body.classList.remove('body-no-scroll')
}

document.getElementById('call-btn').onclick = function () {
  document.querySelector('.feedback-container').style.display = 'flex'
  document.body.classList.add('body-no-scroll')
}

document.getElementById('call-btn2').onclick = function () {
  document.querySelector('.feedback-container').style.display = 'flex'
  document.body.classList.add('body-no-scroll')
}

document.getElementById('close__feed').onclick = function () {
  document.querySelector('.feedback-container').style.display = 'none'
  document.body.classList.remove('body-no-scroll')
}

document.getElementById('chat-btn').onclick = function () {
  document.querySelector('.product-container').style.display = 'flex'
  document.body.classList.add('body-no-scroll')
}

document.getElementById('chat-btn2').onclick = function () {
  document.querySelector('.product-container').style.display = 'flex'
  document.body.classList.add('body-no-scroll')
}

document.getElementById('close__prod').onclick = function () {
  document.querySelector('.product-container').style.display = 'none'
  document.body.classList.remove('body-no-scroll')
}
