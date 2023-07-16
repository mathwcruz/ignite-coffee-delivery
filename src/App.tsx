import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Toaster } from 'react-hot-toast';

import { CoffeeOrderContextProvider } from "./contexts/CoffeeOrderContext";
import { Router } from "./Router";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeOrderContextProvider>
          <Router />
          <Toaster />
        </CoffeeOrderContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
