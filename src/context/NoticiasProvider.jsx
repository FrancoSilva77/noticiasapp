import { useState, useEffect, createContext } from "react";

const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {
  <NoticiasProvider.Provider
    value={{}}
  >
    {children}
  </NoticiasProvider.Provider>
}

export {
  NoticiasProvider
}

export default NoticiasContext