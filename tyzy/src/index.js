import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store/store';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import './styles/styles.css'
import 'antd/dist/antd.css';
import 'antd/dist/antd.less'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <AppRoutes />
  </Provider>
);