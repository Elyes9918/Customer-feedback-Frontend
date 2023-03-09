import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    FormControlLabel,
    Grow,
    Radio,
    RadioGroup,
    TextField,
    Typography,
  } from '@material-ui/core';
  import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import './LoginForm.css';
import { IUserForm } from '../../types/User';
import { Label } from '@material-ui/icons';
import { useAppDispatch } from '../../app/hooks';
import {  getUserListAction } from '../../features/userSlice';
import {  LoginUserAction } from '../../features/authSlice';
import { useAuth } from '../../app/routesProtectionComponents/ProtectedRoutes';
import { store } from '../../app/store';




  
  export const LoginForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();


      useEffect(()=>{
       },[])


      const handleClickRememberPassword = () =>{
      navigate(`/resetPassword`);
      }
   
  
    const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();
      const user: IUserForm = {
        email: email,
        password: password,
      };

      dispatch(LoginUserAction(user)).then(()=>{
        navigate(`/main`);
        window.location.reload();
      })
       
    };
  
    return (
      <Grow in={true} timeout={1000}>
  
        <form onSubmit={handleSubmit}>
          <Card variant='outlined' className='CreateGameCard'>
            
            <CardHeader
              className='CreateGameCardHeader'
              title='Sign in to your account'
              titleTypographyProps={{ variant: 'h4' }}
            />
  
            <CardContent className='CreateGameCardContent'>
              <TextField
                className='CreateGameTextField'
                required
                id='filled-required'
                label='Email'
                placeholder='Enter your email'
                defaultValue={email}
                variant='outlined'
                onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              />
              <TextField
                className='CreateGameTextField'
                required
                id='filled-required'
                label='Password'
                type='password'
                placeholder='Enter your password'
                defaultValue={password}
                variant='outlined'
                onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              />

            <Typography className='ForogtPassword' component="span" onClick={handleClickRememberPassword}>Remember password ?</Typography>

              {/* <RadioGroup
                aria-label='gender'
                name='gender1'
                value={gameType}
                onChange={(
                  event: ChangeEvent<{
                    name?: string | undefined;
                    value: any;
                  }>
                ) => setGameType(event.target.value)}
              >
                <FormControlLabel
                  value={GameType.Fibonacci}
                  control={<Radio color='primary' size='small' />}
                  label='Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89)'
                />
                <FormControlLabel
                  value={GameType.ShortFibonacci}
                  control={<Radio color='primary' size='small' />}
                  label='Short Fibonacci (0, ½, 1, 2, 3, 5, 8, 13, 20, 40, 100)'
                />
                <FormControlLabel
                  value={GameType.TShirt}
                  control={<Radio color='primary' size='small' />}
                  label='T-Shirt (XXS, XS, S, M, L, XL, XXL)'
                />
              </RadioGroup> */}
            </CardContent>
            <CardActions className='CreateGameCardAction'>
              <Button type='submit' variant='contained' color='primary' className='CreateGameButton'>
                Login
              </Button>
            </CardActions>
          </Card>
        </form>
      </Grow>
    );
  };
  