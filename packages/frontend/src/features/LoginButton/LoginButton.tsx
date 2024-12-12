import { useState, FC } from 'react';
import LoginModal from 'src/features/LoginModal/LoginModal';
import Style from './LoginButton.module.scss';
const LoginButton: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (): void => {
    setIsModalOpen(true);
  };
  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <div className={Style.loginContainer}>
      <button className={Style.loginButton} onClick={openModal}>
        Войти
      </button>
      {isModalOpen && <LoginModal closeModal={closeModal} />}
    </div>
  );
};

export default LoginButton;
