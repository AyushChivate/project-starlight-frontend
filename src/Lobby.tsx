type LobbyProps = {
  onToggle: () => void;
  hasLastPlayerJoined: boolean;
  isRoomFull: boolean;
};

export default function Lobby({
  onToggle,
  hasLastPlayerJoined,
  isRoomFull,
}: LobbyProps) {
  return isRoomFull == false ? (
    <>
      <h1>Lobby</h1>
      <button onClick={onToggle} disabled={!hasLastPlayerJoined}>
        Start Game
      </button>
    </>
  ) : (
    <h1>Room Full</h1>
  );
}
