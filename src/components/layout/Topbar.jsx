const TopBar = () => {
  return (
    <div className="bg-black text-white text-sm py-2 px-6 flex justify-between">
      <span>⭐ Read Our 5 Star Reviews</span>

      <div className="flex gap-6">
        <span>📞 +971557711247</span>
        <button className="bg-purple-700 px-3 py-1 rounded">
          Get A Free Quote
        </button>
      </div>
    </div>
  );
};

export default TopBar;