// Hamburger Button for mobile
const hamburgerButton = document.querySelector('.hamburger')
const hamburgerChoices = document.querySelector('.hamburger-choices')

hamburgerButton.addEventListener('click', () => hamburgerChoices.classList.toggle('hide'))

// Modal
// const openModal = document.querySelectorAll('.open-modal')
// const modalContent = document.querySelector('.modal-content')

// openModal.forEach(button => button.addEventListener('click', () => modalContent.classList.toggle('hide')))