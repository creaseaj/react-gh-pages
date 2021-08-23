
const Button = (props) => {
    console.log(props.ref)
    return (
        <div className={`${props.disabled === true ? 'bg-gray-400 text-gray-50' : 'bg-gray-200 border border-gray-700 hover:bg-gray-700 hover:text-gray-200'} flex h-10 w-full rounded-md  justify-center items-center `}
            onClick={props.disabled ? null : props.function}
            ref={props.ref == null ? null : props.ref}
        >
            {props.value}
        </div>
    )
}
export default Button
