type LobbyProps = {
    onToggle: () => void
    disableStart: boolean
    isRoomFull: boolean
}

export default function Lobby({
    onToggle,
    disableStart,
    isRoomFull,
}: LobbyProps) {
    return isRoomFull ? (
        <h1>Room Full</h1>
    ) : (
        <>
            <h1>Lobby</h1>
            <button onClick={onToggle} disabled={disableStart}>
                Start Game
            </button>
        </>
    )
}
