
const Navbar = () => {
    return (
        <div className="flex justify-around mb-5">
            <div>
                <h3 className="text-3xl font-semibold hover:text-purple-500">
                    <a href="http://">Color Haven</a>
                </h3>
            </div>
            <ul className="flex items-center">
                <li>
                    <a className="px-4 py-2 border border-transparent hover:border-purple-500 hover:bg-purple-500 rounded hover:text-white" href="http://">About</a>
                </li>
                <li>
                    <a className="px-4 py-2 border border-transparent hover:border-purple-500 rounded hover:bg-purple-500 hover:text-white" href="http://">Colors</a>
                </li>
                <li>
                    <a className="px-4 py-2 border border-transparent hover:border-purple-500 rounded hover:bg-purple-500 hover:text-white" href="http://">Blog</a>
                </li>
                <li>
                    <a className="px-4 py-2 border border-transparent hover:border-purple-500 rounded hover:bg-purple-500 hover:text-white" href="http://">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;