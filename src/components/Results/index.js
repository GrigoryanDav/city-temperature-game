import { Typography } from "antd";


const { Text } = Typography

const Results = ({ results, getBackgroundColor }) => {
    return (
        <div className="results_container">
            {results.map((result) => {
                return (
                    <div
                        key={result.city}
                        className="result_block"
                        style={{ backgroundColor: getBackgroundColor(result.difference) }}
                    >
                        <Text>City: {result.city}</Text>
                        <Text>Real Temperature: {result.realTemp}</Text>
                        <Text>Your Guess: {result.userTemp}</Text>
                    </div>
                )
            })}
        </div>
    )
}


export default Results