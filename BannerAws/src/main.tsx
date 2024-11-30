import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import '@mantine/core/styles.css';
import {  MantineProvider} from "@mantine/core"

import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/code-highlight/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <MantineProvider>
    <App />
    </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
