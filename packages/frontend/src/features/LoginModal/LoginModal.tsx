import { FC } from 'react';
import Style from './LoginModal.module.scss';

interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ closeModal }) => {
  const stopPropagation = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };
  // const [login, setLogin] = useState('');
  // console.log(login);
  return (
    <div className={Style.modalOverlay} onClick={closeModal}>
      <div className={Style.modal} onClick={stopPropagation}>
        <h2>Вход</h2>
        <form className={Style.loginForm}>
          <input
            type="email"
            autoComplete="email"
            // value={login}
            // onChange={(e) => {
            //   const value = e.currentTarget.value;
            //   if (Number.isNaN(+value)) {
            //     return;
            //   }
            //   setLogin(value);
            // }}
            placeholder="Введите почту"
            className={Style.inputField}
          />
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Введите пароль"
            className={Style.inputField}
          />
          <button
            type="button"
            className={Style.submitButton}
            onClick={closeModal}
          >
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
