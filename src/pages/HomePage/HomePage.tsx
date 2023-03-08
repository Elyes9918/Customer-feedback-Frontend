import './HomePage.css'
import { Divider, Grid, Slide, Typography, useMediaQuery } from '@material-ui/core';
import { useMatch } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import SessionControllerImage from './../../images/Session.jpg';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { SingupShortcut } from '../../components/SingupShortcut/SingupShortcut';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';


const HomePage = () => {
    const isLogin = useMatch('/login');
    const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));

    return ( 
        <>
        <Grid container direction='column' justify='center' alignItems='center' spacing={2}>
  
          <Grid container item sm={12} lg={11} justify='center' alignItems='center' spacing={3}>
            <Grid item sm={12} lg={6}>
              <Slide direction='down' in={true} timeout={1000}>
                <div className='HomePageContainer'>
                  <Typography variant='h5'></Typography>
                  <img
                    alt='Customer Feedback applicaiton'
                    className='HomePageImage'
                    style={{ transform: isSmallScreen ? 'scale(0.5)' : 'none' }}
                    src="https://i.imgur.com/Apse4Pw.png"
                  ></img>
                  <Typography variant='subtitle1' align="center">
                    Welcome to our customer feedback application! We're thrilled to have you on board and can't 
                    wait to help you gather valuable insights from your customers
                   
                  </Typography>
                </div>
              </Slide>
            </Grid>
  
            <Grid item sm={12} lg={6}>
              {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
               <div className='HomePageContainer'>{isLogin ? <LoginForm /> : <RegisterForm />}</div> 
               {/* <div className='HomePageContainer'><LoginForm /></div> */}    
            </Grid>
            </Grid>

          {isLogin && <>
          
          <Grid container item sm={12} lg={9} justify='center' alignItems='center' spacing={3}>
            <Grid item sm={12} lg={6}>
              <Slide in={true} direction='up' timeout={1000}>
                <Divider variant='middle'></Divider>
              </Slide>
            </Grid>
          </Grid>
  
          <Grid container item sm={12} lg={9} justify='center' alignItems='center' spacing={3}>
            <Grid item sm={12} lg={6}>
              <Slide in={true} direction='up' timeout={1500}>
                <div className='HomePageContainer'>
                  {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
                  <SingupShortcut />
                
                </div>
              </Slide>
            </Grid>
  
            <Grid item sm={12} lg={6}>
              <Slide in={true} direction='up' timeout={1500}>
                <div className='HomePageContainer'>
                  <Typography variant='subtitle1'>
                  Our customer feedback application is the perfect solution for capturing the voice of our customers, 
                  Sign up now.
                  </Typography>
                </div>
              </Slide>
            </Grid>
          </Grid>
          <Grid container item sm={12} lg={9} justify='center' alignItems='center' spacing={3}>
            <Grid item sm={12} lg={6}>
              <Slide in={true} direction='up' timeout={2000}>
                <Divider variant='middle'></Divider>
              </Slide>
            </Grid>
          </Grid>
  
          <Grid container item sm={12} lg={9} justify='center' alignItems='center' spacing={3}>
            <Grid item sm={12} lg={6}>
              <Slide in={true} direction='up' timeout={2000}>
                <div className='HomePageContainer'>
                  <Typography variant='h5'> Intuitive UI Design</Typography>
                  <Typography variant='subtitle1' className='textJustify' >
                  Our platform is designed to be user-friendly and intuitive, making it easy for you to get started and start receiving feedback right away. Whether you're looking to optimize your product offerings, improve your customer service, or enhance your overall customer experience, our customer feedback application is the perfect solution. So why wait? Sign up today and start capturing the voice of your customers.
                  </Typography>
                </div>
              </Slide>
            </Grid>

            
            <Grid item sm={12} lg={6}>
              <Slide in={true} direction='up' timeout={2000}>
                <div className='HomePageContainer'>
                  <img
                    className='SessionImage'
                    alt='Session controller'
                    style={{ transform: isSmallScreen ? 'scale(0.6)' : 'none' }}
                    src="https://i.imgur.com/BPaOEn7.png"
                  ></img>
                  
                </div>
              </Slide>
            </Grid>
            
          </Grid>

          </>}
          
          
          
        </Grid>
        
        <Footer />
      </>
     );
}
 
export default HomePage;