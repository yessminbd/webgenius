import React from 'react';
import clsx from 'clsx';

const Textbox = React.forwardRef(({ type, placeholder, label, className, register, name, error }, ref) => {
    return (
        <div className='w-full flex flex-col gap-1'>
            {label && (
                <label htmlFor={name}  className='mb-2  text-gray-300'>
                    {label} 
                </label>
            )}
            <input
            
                type={type}
                name={name}
                placeholder={placeholder}
                ref={ref}
                {...register}
                aria-invalid={error ? 'true' : 'false'} 
                className={clsx(
                    'bg-transparent px-6 py-2.5 2xl:py-3 border',
                    {
                        'border-gray-100': !error,
                        'border-red-500': error, 
                    },
                    'placeholder-gray-400 text-gray-300 outline-none text-base focus:ring-2 ring-[#00E3F8]',
                    className 
                )}
            />
            {error && <span className="text-red-500">{error}</span>} 
        </div>
    );
});

// Définir le displayName
Textbox.displayName = 'Textbox';

export default Textbox;
