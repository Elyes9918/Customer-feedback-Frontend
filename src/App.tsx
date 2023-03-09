import './App.css';
import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route ,Routes,Navigate} from 'react-router-dom';
import { theme } from './services/theme';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import { Toolbar } from './components/Toolbar/Toolbar';
import MainPage from './pages/MainPage/MainPage';
import { EmailForm } from './components/ResetPassword/EmailForm/EmailForm';
import { DoublePasswordForm } from './components/ResetPassword/DoublePasswordForm/DoublePasswordForm';
import ProtectedRoutes from './app/routesProtectionComponents/ProtectedRoutes';
import UnProtectedRoutes from './app/routesProtectionComponents/UnProtectedRoutes';

function App() {
  return (

    <div className="LightTheme">
      <ThemeProvider theme={theme} >
      <StylesProvider injectFirst>
        <CssBaseline />
        <Router>
          <Toolbar />
          <Routes>
            {/* Protected Routes */}
            <Route element ={<ProtectedRoutes/>}>
              <Route path='/main' element={<MainPage/>}/>
            </Route>
            {/* Unprotected Routes */}
            <Route element ={<UnProtectedRoutes/>}>
              <Route path="/resetPassword/changePassword/:resetToken" element={<HomePage/>}/> 
              <Route path="/login" element={<HomePage/>}/> 
              <Route path="/register" element={<HomePage/>}/> 
              <Route path="/resetPassword" element={<HomePage/>}/> 
              <Route path="/*" element={<Navigate to="/login" replace/>} /> 
            </Route>
          </Routes>
        </Router>
      </StylesProvider>
    </ThemeProvider>
   </div>

  );
}

export default App;
