function Button({ onClick,title }) {
    return (
        <div className="flex justify-center items-center">
            <button onClick={onClick} className="w-full px-4 py-2 bg-black text-white font-semibold rounded-lg  ">
                {title}
            </button>
        </div>
    )

}

export default Button;