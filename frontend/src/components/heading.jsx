function Heading({ title, sub_title }) {
    return (
      <div className="text-center">
        <div className="text-3xl font-bold text-gray-900 mb-2">
          {title}
        </div>
        <div className="text-lg font-semibold text-gray-600">
          {sub_title}
        </div>
      </div>
    );
  }
  
  export default Heading;
  