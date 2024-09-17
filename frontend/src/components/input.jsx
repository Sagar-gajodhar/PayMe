function Input({ onchange , title, ph , type = "text" }) {
    return (
      <div className="flex flex-col space-y-2">
        <label className="text-black font-medium">{title}</label>
        <input
          type = {type}
          onChange={onchange}
          placeholder={ph}
          className="px-2 py-1 border border-gray-500 rounded-lg"
        />
      </div>
    );
  }
  
  export default Input