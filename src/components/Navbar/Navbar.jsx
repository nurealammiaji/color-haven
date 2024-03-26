
const Navbar = () => {
    return (
        <div className="flex justify-around mb-5">
            <div>
                <h3 className="text-3xl font-semibold">Color Haven</h3>
            </div>
            <ul className="flex items-center">
                <li>
                    <a className="px-4 py-2 border border-transparent hover:border-purple-500" href="http://">About</a>
                </li>
                <li>
                    <a className="px-4 py-2 border border-transparent hover:border-purple-500" href="http://">Colors</a>
                </li>
                <li>
                    <a className="px-4 py-2 border border-transparent hover:border-purple-500" href="http://">Blog</a>
                </li>
                <li>
                    <a className="px-4 py-2 border border-transparent hover:border-purple-500" href="http://">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;