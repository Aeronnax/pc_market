import { FC } from 'react';
import Style from './LoginModal.module.scss';
interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ closeModal }) => {
  const stopPropagation = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };
  return (
    <div className={Style.modalOverlay} onClick={closeModal}>
      <div className={Style.modal} onClick={stopPropagation}>
        <h2>Вход</h2>
        <form className={Style.loginForm}>
          <input
            type="email"
            placeholder="Введите почту"
            className={Style.inputField}
          />
          <input
            type="password"
            placeholder="Введите пароль"
            className={Style.inputField}
          />
          <button type="submit" className={Style.submitButton}>
            Войти
          </button>
        </form>
        <button className={Style.closeButton} onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
