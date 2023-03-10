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
  import { useNavigate, useParams } from 'react-router-dom';
  import './DoublePasswordForm.css';
import { IUserForm } from '../../../types/User';
import { Label } from '@material-ui/icons';
import { useAppDispatch } from '../../../app/hooks';
import { ChangeUserPasswordAction } from '../../../features/authSlice';
import { useForm } from 'react-hook-form';

// interface RegisterFormProps {
//   mainPageEmail: string;
// }


export const DoublePasswordForm = ( ) => {
    const navigate = useNavigate();

    let { resetToken } = useParams<{ resetToken: string }>();


    const [password, setPassword] = useState('');
    const [cPassword,setCPassword]= useState('');
    const dispatch = useAppDispatch();
    const {register,handleSubmit,formState:{errors}} = useForm();




    useEffect(()=>{
      },[])

  
      const onSubmit = (data: any) => {
      const user: IUserForm = {
        password: data?.password,
        token: resetToken
      };
      
      // Post request 
      if(password === cPassword){
        dispatch(ChangeUserPasswordAction(user)).then(()=>{
          navigate('/login')
        })
      }
       
    };

    return (
        <Grow in={true} timeout={1000}>
    
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card variant='outlined' className='CreateGameCard'>
              
              <CardHeader
                className='CreateGameCardHeader'
                title='Enter your new password'
                titleTypographyProps={{ variant: 'h4' }}
              />
    
              <CardContent className='CreateGameCardContent'>
               
                <TextField
                  className='CreateGameTextField'
                  id='filled-required 2'
                  label='Password'
                  type='password'
                  placeholder='Enter your password'
                  defaultValue={''}
                  variant='outlined'
                  {...register("password", { required: "Password is required." })}
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message?.toString()}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                />
  
                <TextField
                  className='CreateGameTextField'
                  id='filled-required 3'
                  label='Confirm Password'
                  type='password'
                  placeholder='Enter your password'
                  defaultValue={''}
                  variant='outlined'
                  {...register("Cpassword", { required: "Confirm Password is required." })}
                  error={Boolean(errors.Cpassword)}
                  helperText={errors.Cpassword?.message?.toString()}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => setCPassword(event.target.value)}
                />
  
              </CardContent>
              <CardActions className='CreateGameCardAction'>
                <Button type='submit' variant='contained' color='primary' className='CreateGameButton'>
                  Confirm
                </Button>
              </CardActions>
            </Card>
          </form>
        </Grow>
      );
  
   
  };
  