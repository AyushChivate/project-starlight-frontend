type GameProps = { onToggle: () => void };

export default function Game({ onToggle }: GameProps) {
    return (
        <>
            <h1>Game</h1>
            <button onClick={onToggle}>Back to Lobby</button>
        </>
    )
}
