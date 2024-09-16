import { useForm } from 'react-hook-form'
import './RegisterForm.css'
const onSubmit = (values) => {
  alert(JSON.stringify(values))
}
export const RegisterForm = () => {
  const { register, handleSubmit, formState, watch } = useForm({
    defaulValues: {
      userName: '',
      userSurname: '',
      dateOfBirth: '',
      email: '',
      password: '',
      idNumber: '',
      idExpire: ''
    }
  })

  const asUserID = watch('idNumber')
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='registerform'>
      <div className='userName'>
        <label htmlFor='userName'>Name:</label>
        <input
          type='Text'
          {...register('userName', {
            required: { value: true, message: 'Input a name' }
          })}
        />
        {formState.errors.userName ? (
          <p className='error'>{formState.errors.userName.message}</p>
        ) : null}
      </div>
      <div className='UserSurame'>
        <label htmlFor='userSurame'>Surname:</label>
        <input
          type='Text'
          {...register('userSurname', {
            required: { value: true, message: 'Input a Surname' },
            pattern: { value: /^[A-Za-z]+$/i, message: 'Input Leters' }
          })}
        />
        {formState.errors.userSurname ? (
          <p className='error'>{formState.errors.userSurname.message}</p>
        ) : null}
      </div>

      <div className='UserBirth'>
        <label htmlFor='dateOfBirth'>Date of Birth:</label>
        <input type='date' {...register('dateOfBirth')} />
      </div>

      <div className='UserEmail'>
        <label htmlFor='email'>Email:</label>
        <input
          type='Text'
          {...register('email', {
            required: { value: true, message: 'Input an Email' },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        {formState.errors.email ? (
          <p className='error'>{formState.errors.email.message}</p>
        ) : null}
      </div>
      <div className='password'>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          {...register('password', {
            required: { value: true, message: 'Input an Password' },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
              message:
                'Password must contain One upper case, one Lower case, one number and be minimum 8 characters'
            }
          })}
        />
        {formState.errors.password ? (
          <p className='error'>{formState.errors.password.message}</p>
        ) : null}
      </div>
      <div className='userID'>
        <label htmlFor='idNumber'>Id Number:</label>
        <input type='Text' {...register('idNumber')} />
      </div>
      {asUserID ? (
        <div className='userIDExpiry'>
          <label htmlFor='idExpire'>ID Expiry Date:</label>
          <input
            type='Date'
            {...register('idExpire', {
              required: { value: true, message: 'Select your Expiry Date' }
            })}
          />
        </div>
      ) : null}

      <button type='submit'>Send</button>
    </form>
  )
}
