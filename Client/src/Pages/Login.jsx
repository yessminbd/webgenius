import { useForm } from 'react-hook-form';
import Textbox from '../Components/Textbox';
import Button from '../Components/Button';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  


  return (
    <div className='w-full min-h-screen flex place-items-center justify-center flex-col lg:flex-row '>
      <div className='w-full md:w-auto  flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center' >
        <div className='w-full md:w-1/3 p-14 flex flex-col items-center justify-center'>
          <form onSubmit={handleSubmit()} className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-neutral px-10 pt-14 pb-14'>
            <div className=''>
              <p className='text-[#00E3F8] bg-gradient-to-tr to-[#00E3F8] from-[#9ee0e6] text-transparent  bg-clip-text text-3xl font-bold text-center'>Welcome back!</p>
            </div>
            <div className='flex flex-col gap-y-5'>
              <Textbox
                placeholder="email@example.com"
                type="email"
                name='email'
                label='Email address'
                className='w-full rounded-full '
                register={register("email", { required: 'Email address is required' })}
                error={errors.email ? errors.email.message : ''}
              />
            </div>
            <div className='flex flex-col gap-y-5'>
              <Textbox
                placeholder="password"
                type="password"
                name='password'
                label='Password'
                className='w-full rounded-full '
                register={register("password", { required: 'Password is required' })}
                error={errors.password ? errors.password.message : ''}
              />
              <span className='text-sm text-gray-300 hover:text-[#00E3F8] hover:underline cursor-pointer'>Forget Password?</span>
            </div>
            <Button
              type={'submit'}
              label={'Login'}
              className='w-full h-10 bg-[#00E3F8] text-white'
            />
            <span className='text-center text-base text-gray-300'>Do not share your confidential information with anyone!</span>
          </form>
        </div>

      </div>
    </div>
  )
}

