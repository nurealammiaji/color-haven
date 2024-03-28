
const ColorBox = ({ fn }) => {

    const colorHandler = fn;

    const picker = (e) => {
        e.preventDefault();
        const color = e.target.color.value;
        const category = e.target.category.value;
        colorHandler(color, category);
    }

    return (
        <div className="relative">
            <h4 className="absolute bg-white text-xl px-5 py-2 top-[-23px] left-32 center font-semibold">Color Box</h4>
            <form onSubmit={picker} className="flex flex-col border p-10 rounded-2xl">
                <div className="rounded-xl border p-5">
                    <p className="text-lg mb-3">Pick Color</p>
                    <input className="w-[250px] h-[35px]" type="color" name="color" id="color" />
                </div>
                <div className="mt-5 rounded-xl border p-5">
                    <p className="text-lg mb-3">Pick Category</p>
                    <select className="w-[250px] p-2" name="category" id="category">
                        <option value="violet">Violet</option>
                        <option value="blue">Blue</option>
                        <option value="white">White</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                    </select>
                </div>
                <div className="text-center mt-8">
                    <button type="submit" className="border text-lg rounded py-2 px-5 bg-purple-400 hover:bg-purple-600 hover:text-white">Add Color</button>
                </div>
            </form>
        </div>
    );
};

export default ColorBox;