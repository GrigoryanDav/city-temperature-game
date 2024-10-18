import { useState } from "react";

const API_KEY = 'e5b3f49657b2ccff409c34647081d13b';

const MainGame = () => {
    const [currentCity, setCurrentCity] = useState('')

    const fetchTemperature = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${API_KEY}`)
            const data = await response.json()
            if(response.ok) {
                return Math.round(data.main.temp)
            }
        } catch (err) {
            console.error(`Message: ${err}`)
        }
    }
    
    return (
        <div>

        </div>
    )
}

export default MainGame