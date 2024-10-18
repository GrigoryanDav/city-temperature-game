import successSound from '../../Sounds/success-sound.mp3'
import failSound from '../../Sounds/fail-sound.mp3'
import gameOverSound from '../../Sounds/game-over.mp3'


export const playSound = (sound) => {
    const audio = new Audio(sound)
    audio.play().catch(error => console.error('Error playing sound:', error))
}

export const sounds = {
    success: successSound,
    fail: failSound,
    gameOver: gameOverSound,
}