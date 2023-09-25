import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux-toolkit/store';

import App from './App.jsx'
import './index.css'
import Catalog from './pages/Catalog.jsx';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Summary from './pages/Summary';
import DeliveryAndPayment from './pages/DeliveryAndPayment';
import AboutUs from './pages/AboutUs';
import Contacts from './pages/Contacts';
import FAQ from './pages/FAQ';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/catalog',
    element: <Catalog />,
  },
  {
    path: '/catalog/product',
    element: <Product />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/summary',
    element: <Summary />,
  },
  {
    path: '/delment',
    element: <DeliveryAndPayment />,
  },
  {
    path: '/aboutus',
    element: <AboutUs />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
  {
    path: '/faq',
    element: <FAQ />,
  },
], { basename: '/' });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
