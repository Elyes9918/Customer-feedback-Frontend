import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grow,
    TextField,
  } from '@material-ui/core';
  import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import './EmailForm.css';
import { Label } from '@material-ui/icons';
import { useAppDispatch } from '../../../app/hooks';
import { IUserForm } from '../../../types/User';
import { resetUserPasswordAction } from '../../../features/authSlice';
import { useForm } from 'react-hook-form';


export const EmailForm = ( ) => {
    const navigate = useNavigate();

    const [isEmailSent,setIsEmailSent] = useState(false);
    const [message,setMessage] =useState('')
    const dispatch = useAppDispatch();
    const {register,handleSubmit,formState:{errors}} = useForm();



    useEffect(()=>{
      },[])

  
      const onSubmit = (data: any) => {
      const user: IUserForm = {
        email: data?.email,
      };
      
        dispatch(resetUserPasswordAction(user)).then(()=>{
          setIsEmailSent(true);
          setMessage("An Email has been sent, Please check your mail box")
        })

 
    };
  
    return (
      <Grow in={true} timeout={1000}>

        <form onSubmit={handleSubmit(onSubmit)}>
        <Card variant='outlined' className='CreateGameCard'>
          
          <CardHeader className='CreateGameCardHeader' title='Enter your email'
            titleTypographyProps={{ variant: 'h4' }} />

            <CardContent className='CreateGameCardContent'>

            <TextField
              className='CreateGameTextField'
              id='filled-required 1'
              label='Email'
              placeholder='Enter your email'
              defaultValue={''}
              variant='outlined'
              {...register("email", { required: "E-mail Address is required." })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message?.toString()}
            />

            {isEmailSent && 
              <div>
                {message}
              </div>
            }

          </CardContent>
          <CardActions className='CreateGameCardAction'> 
            <Button type='submit' variant='contained' color='primary' className='CreateGameButton'>
              Send Email Request
            </Button>
          </CardActions>
        </Card>
        </form>
                  
      </Grow>
    );
  };
  