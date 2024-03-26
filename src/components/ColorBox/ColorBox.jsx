
const ColorBox = () => {
    return (
        <div className="mt-36 flex">
            <div className="flex flex-col border p-10 rounded-2xl">
                <div className="rounded-xl border p-5">
                    <p className="text-lg mb-3">Pick Color</p>
                    <input className="w-[250px]" type="color" name="color" id="color" />
                </div>
                <div className="mt-5 rounded-xl border p-5">
                    <p className="text-lg mb-3">Pick Category</p>
                    <select className="w-[250px] p-2" name="category" id="category">
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="green">Green</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                    </select>
                </div>
                <div className="text-center mt-5">
                    <button className="border font-medium text-lg rounded-lg py-2 px-5 bg-purple-400 hover:bg-purple-600 hover:text-white">Add Color</button>
                </div>
            </div>
        </div>
    );
};

export default ColorBox;