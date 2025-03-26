const GradientButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 border border-[#2A2A2A] rounded-md text-sm font-semibold text-white flex items-center gap-1 justify-center"
      style={{
        background: "linear-gradient(11deg, #07070E 37.58%, #45418D 165.54%)",
      }}
    >
      {children}
    </button>
  );
};

export default GradientButton;
