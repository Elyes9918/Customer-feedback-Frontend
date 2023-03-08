import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route ,Routes,Navigate} from 'react-router-dom';
import { theme } from './services/theme';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import { Toolbar } from './components/Toolbar/Toolbar';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (

    <div className="LightTheme">
      <ThemeProvider theme={theme} >
      <StylesProvider injectFirst>
        <CssBaseline />
        <Router>
          <Toolbar />
          <Routes>
            <Route path='/main' element={<MainPage/>}/>
            <Route path='/*' element={<NotFound/>} />
            <Route path="/" element={<Navigate to="/login" replace/>} /> 
            <Route path="/login" element={<HomePage/>}/> 
            <Route path="/register" element={<HomePage/>}/> 
          </Routes>
        </Router>
      </StylesProvider>
    </ThemeProvider>
   </div>

  );
}

export default App;
