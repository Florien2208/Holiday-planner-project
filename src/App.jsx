import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
// import { Switch } from "react-router-dom";
// import ProtectedRoute from "./component/ProtectedRoute";
import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";
import test1 from "./component/test1";
import Login from "./pages/LoginForn";
import Signup from "./pages/SignupForm";
import Tour from "./pages/Tour";
import Dashboard from "./component/Dashboard";
import Header from "./pages/Header";
import Footer from "./pages/Test";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import { useState } from 'react';
import Dashboardheader from "./component/Dashboard";
import SideBarDashboard from "./component/SideBarDashboard";
 const Applayout= ()=>{
 return(
 <>
      <Header/>
      <Outlet/>
<Footer/>
    </>);
  };
  const Applayout1=()  =>{
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className="grid-container">
      <Dashboardheader OpenSidebar={OpenSidebar} />
     <SideBarDashboard openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <main className="main-container">
        <Outlet />
      </main> 
    </div>
  )
}
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Applayout />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/Tour" element={<Tour />} />
            <Route path="/" element={<Home />} />
            <Route path="/About" Component={About} />
          </Route>
          {/* <Switch>
            <Route path="/login" component={LoginForn} />
            <ProtectedRoute
              path="/dashboard"
              component={Dashboard}
              isAuthenticated={isAuthenticated}
            />
          </Switch> */}

          <Route path="/test1" element={test1} />
          <Route path="/LoginForn" element={<Login />} />
          <Route path="/SignupForm" element={<Signup />} />
          <Route path="/Navbar" element={<Navbar />} />

          <Route path="/SideBarDashboard" element={<SideBarDashboard />} />

          <Route path="/Dashboard" element={<Applayout1 />}>
            {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
          </Route>
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
