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
import {  LoginUserAction } from '../../features/authSlice';
import { RootState, useAppDispatch, useAppSelector, useAppThunkDispatch } from '../../app/store';
import { useForm } from 'react-hook-form';
import { ApiStatus } from '../../types/ApiStatus';
import validateEmail from '../../utility/EmailValidation';



  
  export const LoginForm = () => {

    const [isLoginSuccessful,setIsLoginSuccesful] = useState(true);
    const [message,setMessage] = useState('');

    const navigate = useNavigate();
    const dispatch = useAppThunkDispatch();
    const {register,handleSubmit,formState:{errors}} = useForm();

   

    
    
    useEffect(() => {
      
    }, [])


    const onSubmit = async (data: any) => {

      const user: IUserForm = {
        email: data?.email,
        password: data?.password
      };

      setMessage("Invalid Credentials, Please try again.")
      if(validateEmail(data?.email)){
        try{
          await dispatch(LoginUserAction(user)).unwrap().then(()=>{
            navigate(`/main`);
          });
    
          }catch(error){
            setIsLoginSuccesful(false);
          }
      }else{
        setMessage("Invalid Email, Please try again.")
        setIsLoginSuccesful(false);
      }

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

                {!isLoginSuccessful && 
                  <div className='errorMessage'>
                    {message}
                  </div>
                }


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
  