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
import { LoginUserAction, getUserListAction } from '../../reduxSlices/UserSlice';
import { useLoginUserMutation } from '../../services/AuthApi';
import { setUser } from '../../reduxSlices/authSlice';

// interface RegisterFormProps {
//   mainPageEmail: string;
// }


export const RegisterForm = ( ) => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser,{data,isSuccess,isError,error}] = useLoginUserMutation();
    const dispatch = useAppDispatch();

    // setEmail(mainPageEmail);

    useEffect(()=>{
      },[])

   
  
    const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();
      const user: IUserForm = {
        email: email,
        password: password,
      };

  
      await loginUser({email,password});

        // dispatch(setUser({token:data.token}));
      
      navigate(`/main`);
    
      // console.log(email);
      // console.log(password);
      //dispatch(LoginUserAction(user))

     // const newGameId = await addNewGame(game);
 
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

              <TextField
                className='CreateGameTextField'
                required
                id='filled-required'
                label='Confirm Password'
                type='password'
                placeholder='Enter your password'
                defaultValue={password}
                variant='outlined'
                onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
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
  