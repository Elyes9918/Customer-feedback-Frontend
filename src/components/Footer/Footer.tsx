import { Divider, Link, Slide, Typography } from '@material-ui/core';
import CopyrightIcon from '@material-ui/icons/Copyright';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css';

export const Footer = () => {
  return (
    <footer >
      <Slide in={true} direction='up' timeout={3000}>
        <div className='FooterSection'>
          <Divider variant='middle'></Divider>
          <div className='FooterContainer'>
            <div className='FooterItemContainer'>
              <CopyrightIcon color='secondary' fontSize='small' className='CopyRightStyle' />
              <Typography color='textSecondary' variant='body2' >
              Copyright 2023 Wevioo
              </Typography>
            </div>

            <Divider orientation='vertical' flexItem></Divider>
            <div className='FooterItemContainer'>
              <Typography color='textSecondary' variant='body2'>
                Contact us - Privacy policy - Cookies policy 
              </Typography>
            </div>

            <Divider orientation='vertical' flexItem></Divider>

            <div>
            <InstagramIcon color='secondary' fontSize='small' className='iconsStyle' />
            <FacebookIcon color='secondary' fontSize='small' className='iconsStyle' />
            <LinkedInIcon color='secondary' fontSize='small' className='iconsStyle' />
            </div>


          </div>
        </div>
      </Slide>
    </footer>
  );
};