import { Typography, Input, Button } from 'antd'
import './index.css'

const { Title } = Typography

const GuessBlock = ({ currentCity, userTemperature, setUserTemperature, handleCheck, gameStarted, handleStart }) => {
    return (
        <div className='guess_block'>
            <Title level={3}>City Game</Title>
            {gameStarted ? (
                <>
                <Title level={4}>{currentCity}</Title>
            <Input
                type='number'
                value={userTemperature}
                onChange={(e) => setUserTemperature(e.target.value)}
                placeholder="Enter temperature"
            />
            <hr />
            <Button
                type='primary'
                onClick={handleCheck}
                disabled={!userTemperature}
            >
                Check
            </Button>
                </>
            ) : (
                <Button type='primary' onClick={handleStart}>
                    Start
                </Button>
            )}
        </div>
    )
}

export default GuessBlock