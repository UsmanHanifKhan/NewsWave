import './App.css'
import Navbar from './components/Navbar/Navbar'
import NewsItems from './components/NewsItems/NewsItems'
import { BrowserRouter  ,  Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>

    {/* <Navbar />
    <NewsItems search={'anime'}/> */}

    <BrowserRouter>
    
    <div className='App'>
    <Navbar  />
    <Routes>
    <Route path="/" element={<NewsItems />} />
     <Route path="/anime" element={<NewsItems search={'anime'} />} /> 
     <Route path="/health" element={<NewsItems search={'health'} />} /> 
     <Route path="/entertainment" element={<NewsItems search={'entertainment'} />} /> 
     <Route path="/sciences" element={<NewsItems search={'sciences'} />} /> 
     <Route path="/sport" element={<NewsItems search={'sport'} />} /> 
     <Route path="/technology" element={<NewsItems search={'technology'} />} /> 
     </Routes>
     </div>
     </BrowserRouter>
    </>
  )
  }

export default App
