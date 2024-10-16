import clsx from 'clsx';

const Button = ({ className, label, type, onClick = () => { }, icon }) => {
    return (
        <button
            type={type || 'button'}
            className="'py-2 px-3  border-[#9ee0e6] bg-gradient-to-r to-[#00E3F8] from-[#9ee0e6] font-semibold text-black  bx-3 py-2 outline-none  border bg-[#00E3F8]  rounded-full"
            onClick={onClick}
        >
            <span>{label}</span>
            {icon && icon}
        </button>
    );
};

export default Button;
