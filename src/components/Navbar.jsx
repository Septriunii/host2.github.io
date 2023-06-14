import hamb from "../assets/hamb.png";

function Navbar() {
  return (
    <div className="h-16 w-full text-white bg-gray-600 top-0 left-0 flex justify-around items-center cursor-pointer">
      <section className=" h-10 w-10 bg-cover">
        <img src={hamb} alt="Hamburger" />
      </section>

      <section className="flex justify-center items-center gap-10">
        <div className="cursor-pointer text-white ">Home</div>
        <div className="cursor-pointer text-white">Products</div>
        <div className="cursor-pointer text-white">About</div>
      </section>

      <section className="right-0">
        <input type="text" />
        <button className="ml-3 font-semibold bg-slate-800 px-2 py-1 rounded-md">
          Search
        </button>
      </section>
    </div>
  );
}

export default Navbar;
