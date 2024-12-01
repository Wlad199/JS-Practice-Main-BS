import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Sidebar from './Main/Sidebar';
import Footer from './Footer/Footer';

const site = {
  site_name: 'Ninja',
  site_title: 'Японские мечи',
  nav: [
    {link: 'nav1', text: 'my link'},
    {link: 'nav2', text: 'my link 2'},
    {link: 'nav3', text: 'my link 3'},
  ]
}

function App() {
  return (
   <>
   <Header siteData = {site}/>
   <Main />
   <Sidebar />
   <Footer siteData = {site} />
   </>
  );
}

export default App;
