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

export const EmailForm = ( ) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [isEmailSent,setIsEmailSent] = useState(false);
    const [message,setMessage] =useState('')
    const dispatch = useAppDispatch();


    useEffect(()=>{
      },[])

  
    const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();
      const user: IUserForm = {
        email: email,
      };
      
        dispatch(resetUserPasswordAction(user)).then(()=>{
          setIsEmailSent(true);
          //set Message here and show it in the UI
          setMessage("An Email has been sent, Please check your mail box")
        })

 
    };
  
    return (
      <Grow in={true} timeout={1000}>

        <form onSubmit={handleSubmit}>
        <Card variant='outlined' className='CreateGameCard'>
          
          <CardHeader className='CreateGameCardHeader' title='Enter your email'
            titleTypographyProps={{ variant: 'h4' }} />

            <CardContent className='CreateGameCardContent'>

            <TextField
              className='CreateGameTextField'
              required
              id='filled-required 1'
              label='Email'
              placeholder='Enter your email'
              defaultValue={email}
              variant='outlined'
              onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
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
  