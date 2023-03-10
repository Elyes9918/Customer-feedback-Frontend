import './App.css';
import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Route ,Routes,Navigate} from 'react-router-dom';
import { theme } from './services/theme';
import HomePage from './pages/HomePage/HomePage';
import { Toolbar } from './components/Toolbar/Toolbar';
import MainPage from './pages/MainPage/MainPage';
import AuthProtectedRoutes from './routesProtectionComponents/AuthProtectedRoutes';
import UnProtectedRoutes from './routesProtectionComponents/UnProtectedRoutes';
import Testing from './pages/Testing';
import RoleProtectedRoutes from './routesProtectionComponents/RoleProtectedRoutes';


function App() {
  return (

    <div className="LightTheme">
      <ThemeProvider theme={theme} >
      <StylesProvider injectFirst>
        <CssBaseline />
        <Router>
          <Toolbar />
          <Routes>


            {/* Authentication Protected Routes */}
            <Route element ={<AuthProtectedRoutes/>}>
              <Route path='/main' element={<MainPage/>}/>

                {/* Role Protected Routes */}
                <Route element={<RoleProtectedRoutes rolesRequired='ADMIN,GESTIONNAIRE'/>}>
                  <Route path='/testing' element={<Testing/>}/>
                </Route>

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
