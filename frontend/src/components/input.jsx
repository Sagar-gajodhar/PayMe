function Input({ onchange , title, ph }) {
    return (
      <div className="flex flex-col space-y-2">
        <label className="text-black font-medium">{title}</label>
        <input
          type="text"
          onChange={onchange}
          placeholder={ph}
          className="px-2 py-1 border border-gray-500 rounded-lg"
        />
      </div>
    );
  }
  
  export default Input