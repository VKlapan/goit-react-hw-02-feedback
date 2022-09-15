import { NoteMessage } from './Notification.styled';

const Notification = ({ message }) => {
  console.log(message);
  return <NoteMessage>{message}</NoteMessage>;
};

export default Notification;
