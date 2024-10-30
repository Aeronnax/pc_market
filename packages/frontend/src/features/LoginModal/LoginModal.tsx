import { FC } from 'react';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import Style from './LoginModal.module.scss';

const validationSchema = z.object({
  email: z
    .string()
    .min(1, 'Поле обязательно для заполнения')
    .email('Неверный формат email')
    .optional(),
  password: z
    .string()
    .min(6, 'Минимальная длина пароля — 6 символов')
    .regex(/[A-Z]/, 'Пароль должен содержать хотя бы одну заглавную букву')
    .regex(/[!@#$%^&*]/, 'Пароль должен содержать хотя бы один спецсимвол')
    .optional(),
});

interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ closeModal }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: toFormikValidationSchema(validationSchema),
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
            autoComplete="email login"
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
