import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


// import App from './App'
import './index.css'
import Home from './pages/Home'
import ListaServicos from './pages/ListaServicos'
import Header from './components/Header'
import Footer from './components/Footer'
import ListaDevs from './pages/ListaDevs'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>

    <Header/>

    <Routes>
      <Route  path='/' element={ <Home/>}/>
      <Route path='listaServico' element= {<ListaServicos/>}/>
      <Route path='ListaDevs' element= {<ListaDevs/>}/>
    </Routes>

    <Footer/>

    </BrowserRouter>
  </React.StrictMode>,
)
