import React from 'react';
//Data accomodation
import data from './accomodation.json';

//Link Nav Header
export const links =[{
  name : "Accueil",
  link:"/"
},
{
  name : "A propos",
  link : "/about"
}];

//Context to use
const appContext = {
  data: data,
  links: links
};

export const DataContext = React.createContext(appContext);
export const AppContextProvider = ({ children }) => {
  return (
    <DataContext.Provider value={appContext}>
      {children}
    </DataContext.Provider>
  );
};