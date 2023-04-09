import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BasketStore from './store/BasketStore';
import DeviceStore from './store/DeviceStore';
import OrderStore from './store/OrderStore';
import UserStore from './store/UserStore';


export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore(),
    basket: new BasketStore(),
    order: new OrderStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

