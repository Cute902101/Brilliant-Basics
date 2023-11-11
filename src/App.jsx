import { useState } from 'react'
import Home from './Pages/Home'
import { ProductProvider } from './Services/ProductContext'
import "./index.css"

function App() {

  return (
    <>
      <ProductProvider>
        <Home></Home>
      </ProductProvider>
    </>
  )
}

export default App
