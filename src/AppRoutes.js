import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import UserList from './users/UserList';
import NotFound from './NotFound';
import Header from './Header';
import Footer from './Footer';
import Register from './Register';
import Login from "./Login";
import UpdateUser from './utils/UpdateUser';
import AutoCounter from './utils/AutoCounter';
const AppRoutes=()=><BrowserRouter>
<Header/>

        <Routes>
            <Route path="/" element={<Home/>}></Route> 
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/users" element={<UserList/>}></Route>
            <Route path="/users/update" element={<UpdateUser/>}></Route>
           {/*<Route path="*" element={<Navigate to ="/"/>}></Route>*/}
           {/*<Route path="*" element={<Home/>}></Router> */}
           <Route path="/register" element={<Register/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/counter" element={<AutoCounter/>}></Route>
           <Route path="*" element={<NotFound/>}></Route>
           
            </Routes>
            <Footer />
        </BrowserRouter>

        export default AppRoutes;