import { Modal, Typography } from 'antd'


const { Text } = Typography

const GameOverModal = ({ isModalVisible, hasWon, handleModalClose }) => {
    return (
        <Modal
            title="Game Over"
            open={isModalVisible}
            onOk={handleModalClose}
            onCancel={handleModalClose}
        >
            <Text>{hasWon ? 'Congratulations! You Won!' : 'Sorry, you lost. Try again!'}</Text>
        </Modal>
    )
}

export default GameOverModal