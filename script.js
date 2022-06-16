// Hamburger Button for mobile
const hamburgerButton = document.querySelector('.hamburger')
const hamburgerChoices = document.querySelector('.hamburger-choices')
const previewBtn = document.querySelectorAll('.preview')
const projectModal = document.querySelector('.projects')
const closeProjectsBtn = document.querySelector('.close-projects')




hamburgerButton.addEventListener('click', () => hamburgerChoices.classList.toggle('hide'))
// hamburgerButton.addEventListener('click', () => hamburgerChoices.style.display === 'flex')




// Modal
const openModal = document.querySelectorAll('.open-modal')
const modalContent = document.querySelector('.modal-content')
const okayBtn = document.querySelectorAll('.ok-btn')
const modalStatement = document.getElementById('statement')
const funFact = document.querySelector('.fun-fact')

openModal.forEach(button => button.addEventListener('click', (e) => {
    if (e.target.innerText.includes('Add to Friends')) {
        modalStatement.innerText = 'Friendship has been accepted!'
        funFact.innerText = 'I like friendship bracelets'
    }
    else if (e.target.innerText.includes('Add to Group')) {
        modalStatement.innerText = 'Harold Aquino has been added to the Group'
        funFact.innerText = 'I was a drummer in a band group'
    }
    else if (e.target.innerText.includes('Instant Message')) {
        modalStatement.innerText = 'Instant Message is not available at this time'
        funFact.innerText = 'I like instant ramen'
    }
    else if (e.target.innerText.includes('Add to Favorites')) {
        modalStatement.innerText = 'Harold Aquino has been added to your Favorites'
        funFact.innerText = 'My favorite food is Pad Thai'
    }
    else if (e.target.innerText.includes('Block User')) {
        modalStatement.innerText = 'Error: user can\'t be blocked sorry!'
        funFact.innerText = 'Most blocks in a single NBA game is 17 '
    }
    else if (e.target.innerText.includes('Rank User')) {
        modalStatement.innerText = 'Thank you for ranking user as Top 1 in your friends'
        funFact.innerText = 'I hope that I am ranked 1 in your hiring list'
    }
    modalContent.classList.toggle('hide')
    modalContent.showModal()
}))
okayBtn.forEach(button => button.addEventListener('click', () =>  {
     modalContent.classList.toggle('hide')
    modalContent.close()
}))

previewBtn.forEach(button => button.addEventListener('click', () => {
    projectModal.classList.toggle('hide')
    projectModal.showModal()
}))

closeProjectsBtn.addEventListener('click', () => {
    projectModal.classList.toggle('hide')
    projectModal.close()
})





