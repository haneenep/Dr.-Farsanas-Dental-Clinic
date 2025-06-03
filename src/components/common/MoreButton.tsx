

const MoreButton = ({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) => (
  <div className="text-center mt-8">
    <button
      className="px-6 py-3 bg-sky-500 text-white rounded-lg font-semibold shadow-md hover:bg-sky-600 transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);

export default MoreButton
