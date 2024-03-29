
const ColorBox = ({ fn }) => {

    const colorHandler = fn;

    const pickerHandler = (e) => {
        e.preventDefault();
        const color = e.target.color.value;
        const category = e.target.category.value;
        colorHandler(color, category);
    }

    return (
        <div className="relative">
            <h4 className="absolute bg-white text-xl px-4 left-10 py-2 top-[-23px] center font-semibold">Color Box</h4>
            <form onSubmit={pickerHandler} className="flex flex-col p-10 border rounded-2xl">
                <div className="p-5 border rounded-xl">
                    <p className="mb-3 text-lg">Pick Color</p>
                    <input className="w-[250px] h-[35px]" type="color" name="color" id="color" />
                </div>
                <div className="p-5 mt-5 border rounded-xl">
                    <p className="mb-3 text-lg">Pick Category</p>
                    <select className="w-[250px] p-2" name="category" id="category">
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                        <option value="Violet">Violet</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Orange">Orange</option>
                        <option value="Brown">Brown</option>
                    </select>
                </div>
                <div className="mt-8 text-center">
                    <button type="submit" className="px-5 py-2 text-lg border rounded bg-slate-200 hover:bg-purple-600 hover:text-white">Add Color</button>
                </div>
            </form>
        </div>
    );
};

export default ColorBox;