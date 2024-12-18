import { useState } from "react";
import GuessBlock from "../GuessBlock";
import Results from "../Results";
import GameOverModal from "../GameOverModal";
import { API_KEY, BASE_URL, cities } from "../../utils/constants";
import { sounds, playSound } from "../../utils/sounds";
import './index.css'



const MainGame = () => {
    const [currentCity, setCurrentCity] = useState('')
    const [usedCities, setUsedcities] = useState([])
    const [results, setResults] = useState([])
    const [userTemperature, setUserTemperature] = useState('')
    const [hasWon, setHasWon] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [gameStarted, setGameStarted] = useState(false)

    const getRandomcity = () => {
        const remainingCities = cities.filter((city) => !usedCities.includes(city))
        const randomCity = remainingCities[Math.floor(Math.random() * remainingCities.length)]
        setCurrentCity(randomCity)
        setUsedcities((prev) => [...prev, randomCity])
    };

    const fetchTemperature = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}?q=${currentCity}&units=metric&appid=${API_KEY}`
            )
            const data = await response.json()
            if (response.ok) {
                return Math.round(data.main.temp)
            }
        } catch (err) {
            console.error(`Message: ${err}`)
        }
    }

    const handleStart = () => {
        setGameStarted(true)
        getRandomcity()
    }

    const handleCheck = async () => {
        const realTemp = await fetchTemperature()
        if (realTemp !== undefined) {
            const tempDifference = Math.abs(userTemperature - realTemp)
            const isCorrect = tempDifference <= 4
            playSound(isCorrect ? sounds.success : sounds.fail)

            setResults((prevResults) => {
                const updatedResults = [
                    ...prevResults,
                    {
                        city: currentCity,
                        realTemp,
                        userTemp: userTemperature,
                        difference: isCorrect,
                    }
                ]

                if (updatedResults.length === 5) {
                    const correctGuesses = updatedResults.filter((result) => result.difference).length
                    setHasWon(correctGuesses >= 4)
                    setIsModalVisible(true)
                    playSound(sounds.gameOver)
                } else {
                    getRandomcity()
                }
                return updatedResults
            })
        }
        setUserTemperature('')
    }


    const handleModalClose = () => {
        setIsModalVisible(false)
        setResults([])
        setUsedcities([])
        setGameStarted(false)
        getRandomcity()
    }

    const getBackgroundColor = (difference) => (difference ? 'green' : 'red')

    return (
        <div className="game_container">
            <GuessBlock
                currentCity={currentCity}
                userTemperature={userTemperature}
                setUserTemperature={setUserTemperature}
                handleCheck={handleCheck}
                gameStarted={gameStarted}
                handleStart={handleStart}
            />
            <Results results={results} getBackgroundColor={getBackgroundColor} />
            <GameOverModal
                isModalVisible={isModalVisible}
                hasWon={hasWon}
                handleModalClose={handleModalClose}
            />
        </div>
    )
}

export default MainGame