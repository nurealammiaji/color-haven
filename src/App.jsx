import { useState } from 'react';
import './App.css';
import ColorBox from './components/ColorBox/ColorBox';
import Navbar from './components/Navbar/Navbar';
import ShowCase from './components/ShowCase/ShowCase';
import quickId from 'quickid';

function App() {

  const [colorCategory, setColorCategory] = useState([]);

  const colorHandler = (colorName, categoryName) => {
    const newColorCategory = {
      id: quickId.generate(),
      color: colorName,
      category: categoryName,
    }
    setColorCategory([...colorCategory, newColorCategory]);
  }

  const deleteHandler = (id) => {
    const filter = colorCategory.filter((item) => item.id !== id);
    setColorCategory(filter);
  }

  return (
    <>
      <Navbar />
      <div className='flex w-11/12 gap-5 mx-auto mt-40'>
        <ColorBox fn={colorHandler} />
        <ShowCase colorCategory={colorCategory} deleteHandler={deleteHandler} />
      </div>
    </>
  )
}

export default App;
