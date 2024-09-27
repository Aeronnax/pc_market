import { FC } from 'react';
import { useFormik } from 'formik';
import Style from './LoginModal.module.scss';

interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ closeModal }) => {
  const validate = (values: { email: string; password: string }) => {
    const errors: { email?: string; password?: string } = {};
    if (!values.email) {
      errors.email = 'Поле обязательно для заполнения';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Неверный формат email';
    }
    switch (true) {
      case !values.password:
        errors.password = 'Поле обязательно для заполнения';
        break;

      case values.password.length < 6:
        errors.password = 'Минимальная длина пароля — 6 символов';
        break;

      case !/[A-Z]/.test(values.password):
        errors.password =
          'Пароль должен содержать хотя бы одну заглавную букву';
        break;

      case !/[!@#$%^&*]/.test(values.password):
        errors.password = 'Пароль должен содержать хотя бы один спецсимвол';
        break;

      default:
        break;
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('Вход:', values);
      closeModal();
    },
  });

  const stopPropagation = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  return (
    <div className={Style.modalOverlay} onClick={closeModal}>
      <div className={Style.modal} onClick={stopPropagation}>
        <h2>Вход</h2>
        <form className={Style.loginForm} onSubmit={formik.handleSubmit}>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Введите почту"
            className={Style.inputField}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={Style.errorMessage}>{formik.errors.email}</div>
          )}

          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Введите пароль"
            className={Style.inputField}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div className={Style.errorMessage}>{formik.errors.password}</div>
          )}

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
