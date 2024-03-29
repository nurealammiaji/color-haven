
const ShowCase = ({ colorCategory, deleteHandler }) => {
    return (
        <div className="relative w-full p-5 border rounded-2xl">
            <h3 className="absolute bg-white px-4 left-12 top-[-15px] text-xl font-semibold">Color Showcase</h3>
            <div className="p-5">
                {
                    (colorCategory) &&
                    colorCategory.map((item) => <div key={item.id} className="flex items-center p-2 mb-2 border rounded-lg">
                        <div className="flex flex-grow">
                            <p style={{ backgroundColor: `${item.color}` }} className="w-20"></p>
                            <p className="mx-5">{item.color}</p>
                            <p>{item.category}</p>
                        </div>
                        <div>
                            <button onClick={() => deleteHandler(item.id)} className="px-3 py-1 border rounded hover:bg-red-600 bg-slate-200 hover:text-white">Delete</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ShowCase;