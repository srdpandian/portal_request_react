import React, { useEffect, useState } from 'react';
import { withRouter, useLocation  } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import SettingsPanel from './shared/SettingsPanel';
import Footer from './shared/Footer';


const App = () => {
  let location = useLocation();
  const [isFullPageLayout, setisFullPageLayout] = useState(true)
  const fullPageLayoutRoutes = ['/login'];
  useEffect(()=>{
    if (location.pathname === fullPageLayoutRoutes[0]) {
      setisFullPageLayout(false)
      document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
    }else {
      setisFullPageLayout(true)
      document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
    }
  })
  


  



  let navbarComponent = isFullPageLayout ? <Navbar /> : '';
  let sidebarComponent = isFullPageLayout ? <Sidebar /> : '';
  let SettingsPanelComponent = isFullPageLayout ? <SettingsPanel /> : '';
  let footerComponent = isFullPageLayout ? <Footer /> : '';

  return (
    <div className="container-scroller">
      {navbarComponent}
      <div className="container-fluid page-body-wrapper">
        {sidebarComponent}
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes />
            {SettingsPanelComponent}
          </div>
          {footerComponent}
        </div>
      </div>
    </div>
  );
}

  




export default withRouter(App);
