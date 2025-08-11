import { useParams } from "react-router-dom";

const Chat = () => {
  const { roomName } = useParams<{ roomName: string }>();

  return (
    <div>
      <h1>Chat-Raum: {roomName}</h1>
      {/* Weitere Chat-Komponenten */}
    </div>
  );
};

export default Chat;