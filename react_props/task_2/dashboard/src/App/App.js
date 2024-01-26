import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className='App'>
        <Header></Header>
        <div className="App-body">
          <Login></Login>
        </div>
        <Footer></Footer>
      </div>
    </React.Fragment>
  )
}

export default App;
