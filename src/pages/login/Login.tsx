import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import style from './Login.module.scss';

import { LOGIN_VALUES_OPTION } from '@/constants/validation/login';
import { LoginValues } from '@/models/validation/login';

const Login: FC = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<LoginValues>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<LoginValues> = (data) => {
    console.log(JSON.stringify(data));
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style['login-page']}>
      <main className={style['main-content']}>
        <div className={style['field-content']}>
          <label className={style['content']}>
            <input
              {...register('email', LOGIN_VALUES_OPTION.email)}
              className={style['field']}
              placeholder="Email"
            />
            {!!errors.email?.message && (
              <p className={style['message']}>{errors.email.message}</p>
            )}
          </label>
          <label className={style['content']}>
            <input
              {...register('password', LOGIN_VALUES_OPTION.password)}
              className={style['field']}
              placeholder="Password"
            />
            {!!errors.password?.message && (
              <p className={style['message']}>{errors.password.message}</p>
            )}
          </label>
        </div>
        <button disabled={!isValid} className={style['action']}>
          Login
        </button>
      </main>
      <p className={style['message']}>forgot password?</p>
    </form>
  );
};

export default Login;
