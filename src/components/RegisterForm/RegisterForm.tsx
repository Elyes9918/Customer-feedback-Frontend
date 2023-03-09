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
  import './RegisterForm.css';
import { IUserForm } from '../../types/User';
import { Label } from '@material-ui/icons';
import { useAppDispatch } from '../../app/hooks';
import { LoginUserAction, RegisterUserAction } from '../../features/authSlice';

// interface RegisterFormProps {
//   mainPageEmail: string;
// }


export const RegisterForm = ( ) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword,setCPassword]= useState('');
    const dispatch = useAppDispatch();

    useEffect(()=>{
      },[])

  
    const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();
      const user: IUserForm = {
        email: email,
        password: password,
      };

      if(password === cPassword){
        
        dispatch(RegisterUserAction(user)).then(()=>{
          navigate(`/login`);
          //if action is succesfull
        }).catch(()=>{
          //if action failed
        })
        
      }
 
    };
  
    return (
      <Grow in={true} timeout={1000}>
  
        <form onSubmit={handleSubmit}>
          <Card variant='outlined' className='CreateGameCard'>
            
            <CardHeader
              className='CreateGameCardHeader'
              title='Sign Up'
              titleTypographyProps={{ variant: 'h4' }}
            />
  
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
              <TextField
                className='CreateGameTextField'
                required
                id='filled-required 2'
                label='Password'
                type='password'
                placeholder='Enter your password'
                defaultValue={password}
                variant='outlined'
                onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
              />

              <TextField
                className='CreateGameTextField'
                required
                id='filled-required 3'
                label='Confirm Password'
                type='password'
                placeholder='Enter your password'
                defaultValue={cPassword}
                variant='outlined'
                onChange={(event: ChangeEvent<HTMLInputElement>) => setCPassword(event.target.value)}
              />

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
                Register
              </Button>
            </CardActions>
          </Card>
        </form>
      </Grow>
    );
  };
  