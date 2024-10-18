import { Typography, Input, Button } from 'antd'
import './index.css'

const { Title } = Typography

const GuessBlock = ({ currentCity, userTemperature, setUserTemperature, handleCheck }) => {
    return (
        <div className='guess_block'>
            <Title level={3}>City Game</Title>
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
        </div>
    )
}

export default GuessBlock