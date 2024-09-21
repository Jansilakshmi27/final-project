import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import SNregister from './components/SNregister/snregister';
import SponserRegistration from './components/SponserRegistration';
import NGORegistrationform from './components/NGORegistrationform';
import NGOSignIn from './components/NGOSignin';
import SponserSignIn from './components/SponserSignIn';
import Sponsor from './components/Sponseruserpage/Sponsor'; // Sidebar for sponsor's user page
import Profile from './components/Sponseruserpage/Profile'; // Example components inside sponsor page
import Donate from './components/Sponseruserpage/Donate';
// import Transactions from './components/Sponseruserpage/Transactions';
import SponsorRoutes from './components/Sponseruserpage/SponserRoutes';
import AboutUs from './components/Aboutus';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/sponsor-login" element={<SponserSignIn />} />
        <Route path="/admin-login" element={<div>Admin Login Page</div>} />
        <Route path="/join" element={<div>Join Us Page</div>} />
        <Route path="/register" element={<SNregister />} />
        <Route path="/sponserregistration" element={<SponserRegistration />} />
        <Route path="/SponserSignin" element={<SponserSignIn/>}/>
        <Route path="/NGORegistration" element={<NGORegistrationform/>}/>
        <Route path="/ngosignin" element={<NGOSignIn/>}/> 
        <Route path="/sponsor" element={<Sponsor />} /> 

        
        {/* Dashboard for the sponsor's user page */}
        <Route path="/sponseruserpage/*" element={<SponsorRoutes />} />   
        
      </Routes>
    </Router>
  );
};

export default App;
