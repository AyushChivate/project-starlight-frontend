import Lobby from './Lobby'
import Game from './Game'
import { useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

socket.on('connect', () => {
    console.log(`You (Player "${socket.id}") have connected!`)
})

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('Lobby')
    const [isRoomFull, setIsRoomFull] = useState(false)
    const [disableStart, setDisableStart] = useState(true)

    socket.on('disable-start', message => {
        setDisableStart(message)
    })

    socket.on('is-room-full', message => {
        setIsRoomFull(message)
    })

    function toggleScreen() {
        setCurrentScreen(currentScreen === 'Lobby' ? 'Game' : 'Lobby')
    }

    return (
        <>
            {currentScreen === 'Lobby' && (
                <Lobby
                    onToggle={toggleScreen}
                    disableStart={disableStart}
                    isRoomFull={isRoomFull}
                />
            )}
            {currentScreen === 'Game' && <Game onToggle={toggleScreen} />}
        </>
    )
}
