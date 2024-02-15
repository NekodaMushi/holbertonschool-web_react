import { createContext } from 'react';

export const user = { email: '', password:'', isLoggedIn: false };

export const logOut = () => {
  user = {
    email: '',
    password: '',
    isLoggedIn: false,
  }
};

export const AppContext = createContext({user, logOut});
