import { useEffect, useState } from "react";

const API_KEY = 'e5b3f49657b2ccff409c34647081d13b';

const MainGame = () => {
    const cities = [
        'New York', 'London', 'Yerevan', 'Tokyo', 'Paris', 'Sydney', 'Berlin', 'Moscow',
        'Rome', 'Los Angeles', 'Toronto', 'Beijing', 'Seoul', 'Singapore',
        'Dubai', 'Madrid', 'Mumbai', 'Istanbul', 'Bangkok', 'Vienna',
        'San Francisco', 'Mexico City', 'Lima', 'Cairo', 'Buenos Aires',
        'Rio de Janeiro', 'Johannesburg', 'Chicago', 'Hong Kong', 'Shanghai',
        'Barcelona', 'Dublin', 'Warsaw', 'Lisbon', 'Helsinki', 'Stockholm',
        'Oslo', 'Zurich', 'Amsterdam', 'Prague', 'Budapest'
    ];


    const [currentCity, setCurrentCity] = useState('')
    const [usedCities, setUsedcities] = useState([])
    const [results, setResults] = useState([])

    useEffect(() => {
        getRandomcity()
    },[])
    
    const getRandomcity = () => {
        const remainingCities = cities.filter((city) => !usedCities.includes(city))
        if (remainingCities.length === 0) {
            setUsedcities([])
            setResults([])
            return getRandomcity()
        }
        const randomCity = remainingCities[Math.floor(Math.random() * remainingCities.length)]
        setUsedcities((prev) => [...prev, randomCity])
    };

    const fetchTemperature = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&units=metric&appid=${API_KEY}`)
            const data = await response.json()
            if (response.ok) {
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