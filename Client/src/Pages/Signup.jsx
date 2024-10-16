import { useForm } from 'react-hook-form';
import Textbox from '../Components/Textbox';
import Button from '../Components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/Actions/User.actions'
import { CheckIcon } from 'lucide-react';
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const addNewUser = async (data) => {
        await dispatch(addUser(data));
        setIsOpen(true)
    }
    const redirection = () => {
        navigate('/webgenius/home');
    }
    return (
        <div className='w-full min-h-screen flex place-items-center justify-center flex-col lg:flex-row '>
            <div className='w-full md:w-auto  flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center' >
                <div className='w-full md:w-1/3 p-14 flex flex-col items-center justify-center'>
                    <form onSubmit={handleSubmit(addNewUser)} className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-neutral px-10 pt-14 pb-14'>
                        <div className=''>
                            <p className='text-[#00E3F8] bg-gradient-to-tr to-[#00E3F8] from-[#9ee0e6] text-transparent  bg-clip-text text-3xl font-bold text-center'>Sign up</p>
                        </div>
                        <div className='flex flex-col gap-y-5'>
                            <Textbox

                                placeholder="Full name"
                                type="text"
                                name='name'
                                label='Full name'
                                className='w-full rounded-full '
                                register={register("name", { required: 'Name  is required' })}
                                error={errors.name ? errors.name.message : ''}
                            />
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
                                placeholder=" password"
                                type="password"
                                name='password'
                                label='Password'
                                className='w-full rounded-full '
                                register={register("password", { required: 'Password is required' })}
                                error={errors.password ? errors.password.message : ''}
                            />
                            <Link to="/webgenius/login" className='text-sm text-gray-300 hover:text-[#00E3F8] hover:underline cursor-pointer'>Already have an account?</Link>
                        </div>
                        <Button

                            type={'submit'}
                            label={'Sign up'}
                            className='w-full h-10 bg-[#00E3F8] text-white'
                        />
                    </form>
                </div>

            </div>
            {isOpen && (
                <div className="fixed inset-0 z-10 flex items-center justify-center">
                    <div className="relative bg-neutral-800 rounded-lg shadow-xl transform transition-all sm:max-w-lg w-full mx-auto p-6 flex flex-col items-center justify-center">

                        <button

                            onClick={() => redirection()}
                            className="absolute top-2  right-4 bg-transparent hover:text-white text-[#00E3F8]"
                        >
                            ✕
                        </button>

                        <div className="flex items-center justify-center">
                            <p className="p-3 border mt-10 border-[#00E3F8] rounded-full text-[#00E3F8] flex items-center justify-center">
                                <CheckIcon size={60} />
                            </p>
                        </div>
                        <h4 className="text-center text-lg font-semibold mt-4 text-[#00E3F8]">
                            Your account has been successfully created!
                        </h4>
                    </div>
                </div>


            )}
        </div>

    )
}

export default Signup