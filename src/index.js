import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AppProvider} from "./Common/Context/productContext";
import {FilterContextProvider} from "./Common/Context/filter_context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppProvider>
          <FilterContextProvider>
          <App />
          </FilterContextProvider>
      </AppProvider>

  </React.StrictMode>
);


