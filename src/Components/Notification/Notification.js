import { CSSTransition } from 'react-transition-group';
import s from './Notification.module.css';

function Notification({ text, show }) {
  return (
    <CSSTransition in={show} classNames={s} timeout={250} unmountOnExit>
      <div className={s.container}>
        <h3>Warning</h3>
        <p>{text}</p>
      </div>
    </CSSTransition>
  );
}

export default Notification;
