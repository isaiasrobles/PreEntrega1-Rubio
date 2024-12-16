import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { BiColor } from 'react-icons/bi'
import { ImTextColor } from 'react-icons/im'



function App() {
  

  return (
    
    <>
    <div>
      <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={ <ItemListContainer />} />
        <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />

        <Route path="*" element={ <p>En otra versión...</p> } />
      </Routes>
      </BrowserRouter>
    </div>
    </>
  ) 
}

export default App
