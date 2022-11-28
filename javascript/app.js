const playPause = document.querySelector('.play_pause')
const video = document.querySelector('.video')
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')

function isPlay(){
    pause.classList.add('active')
    play.classList.remove('active')
    video.play()
    playPause.setAttribute('data-play', 'true')
}

function isPlayin(){
    let isPlay = playPause.getAttribute('data-play')
    if(isPlay === 'true'){
        play.classList.add('active')
        pause.classList.remove('active')
        playPause.setAttribute('data-play', 'false')
        document.exitFullscreen()
        video.pause()
    } else{
        pause.classList.add('active')
        play.classList.remove('active')
        playPause.setAttribute('data-play', 'true')
        video.requestFullscreen()
        video.play()
        
    }
}
