
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
            <form onSubmit={picker} className="flex flex-col p-10 border rounded-2xl">
                <div className="p-5 border rounded-xl">
                    <p className="mb-3 text-lg">Pick Color</p>
                    <input className="w-[250px] h-[35px]" type="color" name="color" id="color" />
                </div>
                <div className="p-5 mt-5 border rounded-xl">
                    <p className="mb-3 text-lg">Pick Category</p>
                    <select className="w-[250px] p-2" name="category" id="category">
                        <option value="violet">Violet</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="white">White</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                    </select>
                </div>
                <div className="mt-8 text-center">
                    <button type="submit" className="px-5 py-2 text-lg bg-purple-400 border rounded hover:bg-purple-600 hover:text-white">Add Color</button>
                </div>
            </form>
        </div>
    );
};

export default ColorBox;