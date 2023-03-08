import { Button, Slide, useMediaQuery,Divider } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import AppToolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GamesIcon from '@material-ui/icons/Games';
import GithubIcon from '@material-ui/icons/GitHub';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MergeTypeOutlinedIcon from '@material-ui/icons/MergeTypeOutlined';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { useNavigate } from 'react-router-dom';
import './Toolbar.css';
import { useLocation } from 'react-router-dom';
import logo from './../../images/logo_0.png';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { logoutAction } from '../../reduxSlices/UserSlice';

 
export const Toolbar = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme: any)  => theme.breakpoints.down("xs"));


  const title = 'Customer FeedBack';

  const dispatch = useAppDispatch();


  const location = useLocation();
  const isJoinPage = location.pathname.includes('/login');
  const isHomePage = location.pathname.includes('/register');

  return (
    <Slide direction='down' in={true} timeout={800}>
      <AppBar position='sticky' className='AppBar'>
        <AppToolbar>

          <div className='HeaderContainer'>
            <div
              className='HeaderLeftContainer'
              onClick={() => navigate('/')}>

              {/* <GamesIcon className='HeaderIcon' />
              <Typography variant={isSmallScreen? 'subtitle1':'h5'} color='inherit' noWrap>
                {title} 
              </Typography> */}
              {/* <img src="example.jpg" alt="example" width="500" height="375"/> */}
              <img
                    className='SessionImage'
                    alt='Session controller'
                    style={{ marginTop:0,height:42 ,width:160}}
                    src={logo}
                  ></img>
            </div>


            <div>
            {(isJoinPage || isHomePage) && //Means if its join or home page show the button
            
            <Button title="New Session" startIcon={<AddCircleOutlineIcon/>} color='inherit' onClick={() => navigate('/')}>
                {!isSmallScreen ? 'Sign in': null}
            </Button>
            }
            
            {(isJoinPage || isHomePage) && 
            <Button startIcon={<MergeTypeOutlinedIcon/>} size={ isSmallScreen ? "small" : "large"}  color='inherit' onClick={() => navigate('/register')}>
              {!isSmallScreen ? 'Sign up' : null}
            </Button>
            }

            {!isHomePage && !isJoinPage && <Button startIcon={<ExitToApp/>} size={ isSmallScreen ? "small" : "large"}  color='inherit' onClick={() => {navigate('/');dispatch(logoutAction())}}>
              Logout
            </Button>}
              

              <Button
                id='github-button'
                color='inherit'
                onClick={() =>
                  (window.location.href =
                    'https://github.com/Elyes9918')
                }
              >
                <GithubIcon></GithubIcon>
              </Button>
            </div>
            
            
          </div>
          <Divider variant='middle'></Divider>
        </AppToolbar>
      </AppBar>
    </Slide>
  );
};
