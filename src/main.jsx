import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Rouetr/Royuer.jsx';
import Auths from './Firbase/Authprovider/Auths.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Auths>
      <RouterProvider router={router} />
   </Auths>
  </React.StrictMode>,
)
