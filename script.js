// Hamburger Button for mobile
const hamburgerButton = document.querySelector('.hamburger')
const hamburgerChoices = document.querySelector('.hamburger-choices')

hamburgerButton.addEventListener('click', () => hamburgerChoices.classList.toggle('hide'))


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
    else if (e.target.innerText.includes('Send Message')) {
        modalStatement.innerText = 'You can contact me at haroldgaquino@gmail.com'
        funFact.innerText = 'Thank you for the message!'
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



// Songs
const audio = document.getElementById('audio')
const prevSong = document.getElementById('prev')
const playSong = document.getElementById('play')
const pauseSong = document.getElementById('pause')
const nextSong = document.getElementById('next')
const songTitle = document.querySelector('.song-title')
const songArtist = document.querySelector('.song-artist')

const musicList = [
    {
    source: './songs/Flo Rida - Low (feat. T-Pain).mp3',
    title: 'Low',
    artist: 'Flow Rida'
    },
    {
    source: './songs/Coldplay - Viva La Vida.mp3',
    title: 'Viva La Vida',
    artist: 'Coldplay'
    },
    {
    source: './songs/M.I.A. - Paper Planes.mp3',
    title: 'Paper Planes',
    artist: 'M.I.A'
    },
    {
    source: './songs/Timbaland - Apologize.mp3',
    title: 'Aplogize',
    artist: 'Timbaland'
    },
]

let songCount = 0;

prevSong.addEventListener('click', () => {
    songCount > 0 ? songCount-- : songCount = musicList.length - 1
    audio.pause()
    audio.src = musicList[songCount].source
    audio.play()
    songTitle.innerText = musicList[songCount].title
    songArtist.innerText = musicList[songCount].artist
})

nextSong.addEventListener('click', () => {
    songCount < (musicList.length - 1) ? songCount++ : songCount = 0
    audio.pause()
    audio.src = musicList[songCount].source
    audio.play()
    songTitle.innerText = musicList[songCount].title
    songArtist.innerText = musicList[songCount].artist
})

playSong.addEventListener('click', () => {
    pauseSong.classList.remove('change-bg')
    audio.play()
})

pauseSong.addEventListener('click', () => {
    pauseSong.classList.toggle('change-bg')
    audio.pause()
})









