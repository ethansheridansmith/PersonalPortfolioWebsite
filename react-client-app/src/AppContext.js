
import { createContext } from 'react';

export const AppContext = createContext({
  isNavbarExpanded: false,
  toggleNavbar: () => {}
});
