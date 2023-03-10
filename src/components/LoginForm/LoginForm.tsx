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
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {  LoginUserAction } from '../../features/authSlice';
import { RootState, store } from '../../app/store';
import { useForm } from 'react-hook-form';



  
  export const LoginForm = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {register,handleSubmit,formState:{errors}} = useForm();
    const {authStatus} = useAppSelector((state:RootState)=>state.auth)


    useEffect(() => {
      
    }, [])


    const onSubmit = (data: any) => {
      const user: IUserForm = {
        email: data?.email,
        password: data?.password
      };

      dispatch(LoginUserAction(user)).then(() => {
          navigate(`/main`);
          window.location.reload();
      }).catch(() => {
          console.log("Error");
      })
    }
    
    const handleClickRememberPassword = () => {
      navigate(`/resetPassword`);
    }

  
    return (
      <Grow in={true} timeout={1000}>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card variant='outlined' className='CreateGameCard'>
            
            <CardHeader
              className='CreateGameCardHeader'
              title='Sign in to your account'
              titleTypographyProps={{ variant: 'h4' }}
            />
  
            <CardContent className='CreateGameCardContent'>
              <TextField    
                className='CreateGameTextField'
                id='filled-required'  
                label='Email'
                placeholder='Enter your email'
                defaultValue={''}
                variant='outlined'
                {...register("email", { required: "E-mail Address is required." })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message?.toString()}
              />

              <TextField
                className='CreateGameTextField'
                id='filled-required'
                label='Password'
                type='password'
                placeholder='Enter your password'
                defaultValue={''}
                variant='outlined'
                {...register("password", { required: "Password is required." })}
                error={Boolean(errors.password)}
                helperText={errors.password?.message?.toString()}/>


            <Typography className='ForogtPassword' component="span" onClick={handleClickRememberPassword}>
              Remember password ?
            </Typography>

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
  