
import { Routes, Route } from "react-router-dom";

import './App.css';
import Landing from './components/Landing'

import Home2 from './components/Home2'
import Navbar from './components/Navbar'

import RecipeDetail2 from './components/RecipeDetail2'
import { Container } from '@mui/system'
import Recipe2 from './components/Recipe2'
import Filter from './components/Filter'


function App() {
  return (

    <>
      {/* <Home2 /> */}
      {/* <Prueba/> */}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home2 />} />
        <Route exact path="/recipedetail/:id" element={<RecipeDetail2/>}/>
      </Routes>
    </>
  );
}

export default App;
