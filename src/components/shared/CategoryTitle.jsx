const CategoryTitle = ({ title }) => {
  return (
    <div className="bg-gray-300 text-black font-semibold border-l-4 border-orange-500 mb-3">
      <p className="text-base ml-1 p-2">{title}</p>
    </div>
  );
};

export default CategoryTitle;
