import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from './theme';
import { AppProvider } from './context/productContext';
import { FilterContextProvider } from './context/filterContex';
import { CartProvider } from './context/cartContex';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <Auth0Provider
              domain="dev-mqafms50k3y5nejm.us.auth0.com"
              clientId="QsIid5LOuapqP4lcAYAcf3DQZrb0Nrsc"
              authorizationParams={{
                redirect_uri: window.location.origin
              }}
            >
              <App />
            </Auth0Provider>
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();