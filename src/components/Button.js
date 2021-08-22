
const Button = (props) => {
    return (
        <div className={`${props.disabled === true ? 'bg-gray-400 text-gray-50' : 'border border-gray-700 hover:bg-gray-700 hover:text-gray-200' } flex h-10 w-full rounded-md  justify-center items-center `}
            onClick={props.disabled ? null : props.function}
        >
            {props.value}
        </div>
    )
}
export default Button
