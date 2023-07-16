import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './componets/Home/Home.js'
import About from './componets/About/About.js'
import Products from './componets/Products/Products.js'
import Contact from './componets/Contact/Contact.js'
import SingleProduct from './componets/SingleProduct/SingleProduct.js'
import Cart from './componets/Cart/Cart.js'
import Error from './componets/ErrorPage/ErrorPage.js'
import Header from './componets/Header/Header.js'
import Footer from './componets/Footer/Footer.js'
import './App.css'
function App() {
	
	return (
		<div >
			<BrowserRouter>
			<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/products' element={<Products />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/singleproduct/:id' element={<SingleProduct />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/error' element={<Error />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App