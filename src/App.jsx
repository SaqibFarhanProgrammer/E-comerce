import "./App.css";

function App() {
  return (
    <div>
      {obj}
      <div className="min-h-screen flex items-center justify-center bg-black p-6">
        <div className="max-w-xs bg-[#0a0a0a] rounded-2xl shadow-lg overflow-hidden border border-transparent hover:border-[#0040ff] transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,64,255,0.4)]">
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1520975916379-9f3d13b2b0a1?q=80&w=800&auto=format&fit=crop"
              alt="Product"
              className="w-full h-80 object-cover transform group-hover:scale-110 transition-all duration-700 ease-out"
            />
            <span className="absolute top-3 left-3 bg-[#0040ff] text-white text-xs px-3 py-1 rounded-full shadow-lg">
              New
            </span>
          </div>

          <div className="p-5 space-y-3">
            <h3 className="text-xs tracking-widest text-gray-400 uppercase">
              Represent
            </h3>
            <h2 className="text-xl font-bold text-[#f7f9ff] tracking-tight">
              Minimal Linen Shirt
            </h2>

            <div className="flex items-center gap-3">
              <span className="text-xl font-extrabold text-[#f7f9ff]">$69</span>
              <span className="text-sm line-through text-gray-500">$99</span>
            </div>

            <div className="flex items-center gap-2">
              <span
                className="w-5 h-5 rounded-full border border-white/20 cursor-pointer"
                style={{ backgroundColor: "#111827" }}
              ></span>
              <span
                className="w-5 h-5 rounded-full border border-white/20 cursor-pointer"
                style={{ backgroundColor: "#ffffff" }}
              ></span>
              <span
                className="w-5 h-5 rounded-full border border-white/20 cursor-pointer"
                style={{ backgroundColor: "#f97316" }}
              ></span>
            </div>

            <button className="w-full mt-4 py-2 rounded-lg bg-gradient-to-r from-[#0040ff] to-[#0066ff] hover:from-[#0031d6] hover:to-[#0050d4] text-[#f7f9ff] font-semibold shadow-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,64,255,0.5)]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
