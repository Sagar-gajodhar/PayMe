

function Bottom({onclick, title, btn }) {

    return (
      <div className="flex justify-between items-center p-4 ">
        <div className="text-lg font-medium text-gray-800">
          {title}
        </div>
        <button onClick={onclick} className="text-black font-medium">
          {btn}
        </button>
      </div>
    );
  }
  
  export default Bottom;