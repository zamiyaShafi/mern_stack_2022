
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Category from './components/Category';
import Customers from './components/Customers';
import Product from './components/Product';
import CategoryAdd from './components/CategoryAdd';
import BasicCard from './components/CategoryView';
import CategoryEdit from './components/CategoryEdit';
import ProductAdd from './components/ProductAdd';
import ProductEdit from './components/ProductEdit';
import ProductView from './components/ProductView';
import UsersView from './components/UsersView';
import Profile from './components/Profile';
import HomeLanding from './UserComponents/HomeLanding';
import Contact from './UserComponents/Contact';
import AboutUs from './UserComponents/AboutUs';
import Rompers from './UserComponents/Rompers';
import Tops from './UserComponents/Tops';
import NewArrivals from './UserComponents/NewArrivals';
import Dresses from './UserComponents/Dresses';
import Login from './UserComponents/Login';
import Register from './UserComponents/Register';
import Account from './UserComponents/Account';
import OurCollections from './UserComponents/OurCollections';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="app">
     
      <BrowserRouter>
      <Routes>
        
       
        
        
        {/* <Route exact path='/' element={<SignIn/>}/>
        <Route exact path='/SignUp' element={<SignUp/>}/> */}
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/Category' element={<Category/>}/>
        <Route exact path='/Customers' element={<Customers/>}/>
        <Route exact path='/Product' element={<Product/>}/>
        <Route exact path='/CategoryAdd' element={<CategoryAdd/>}/>
        <Route exact path='/CategoryView/:id' element={<BasicCard/>}/>
        <Route exact path='/CategoryEdit/:id' element={<CategoryEdit/>}/>
        <Route exact path='/ProductAdd' element={<ProductAdd/>}/>
        <Route exact path='/ProductEdit/:id' element={<ProductEdit/>}/>
        <Route exact path='/ProductView/:id' element={<ProductView/>}/>
        <Route exact path='/UsersView/:id' element={<UsersView/>}/>
        <Route exact path='/Profile' element={<Profile/>}/>
        <Route exact path='/' element={<HomeLanding/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        <Route exact path="/AboutUs" element={<AboutUs/>}/>
        <Route exact path="/Dresses" element={<Dresses/>}/>
        <Route exact path="/Rompers" element={<Rompers/>}/>
        <Route exact path="/Tops" element={<Tops/>}/>
        <Route exact path="/NewArrivals" element={<NewArrivals/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="Register" element={<Register/>}/>
        <Route exact path="Account" element={<Account/>}/>
        <Route exact path="OurCollections" element={<OurCollections/>}/>



        
        
      </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
