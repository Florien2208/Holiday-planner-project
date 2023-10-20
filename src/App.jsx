import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";

import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";
import test1 from "./component/test1";
import Login from "./pages/LoginForn";
import Signup from "./pages/SignupForm";
import Tour from "./pages/Tour";
import Dashboard from "./component/Dashboard";
import Header from "./pages/Header";
import Footer from "./pages/Test";
import Com from "./assets/comp1";
import ContactForm from "./pages/ContactForm";
 const Applayout= ()=>{
 return(
 <>
      <Header/>
      <Outlet/>
<Footer/>
    </>);
  };
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/Tour" element={<Tour />} />
            <Route path="/" element={<Home />} />
          </Route>

          <Route path="/test1" element={test1} />
          <Route path="/LoginForn" element={<Login />} />
          <Route path="/SignupForm" element={<Signup />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
