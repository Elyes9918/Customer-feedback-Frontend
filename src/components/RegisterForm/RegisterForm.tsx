import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormHelperText,
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
import {  useAppDispatch } from '../../app/store';
import { LoginUserAction, RegisterUserAction } from '../../features/authSlice';
import { useForm } from 'react-hook-form';
import validateEmail from '../../utility/EmailValidation';


export const RegisterForm = ( ) => {
    
    const [password, setPassword] = useState('');
    const [cPassword,setCPassword]= useState('');
    const [isRegisterSuccessful,setIsRegisterSuccesful] = useState(true);
    const [message,setMessage] = useState('');

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {register,handleSubmit,formState:{errors}} = useForm();


    useEffect(()=>{
      },[])


      const onSubmit =  (data: any) => {
      const user: IUserForm = {
        email: data?.email,
        password: data?.password,
      };

      if(!validateEmail(data?.email)){
        setMessage("Invalid Email, Please try again.")
        setIsRegisterSuccesful(false);
      }else if(password !== cPassword){
        setMessage("Passwords do not match, Please try again.")
        setIsRegisterSuccesful(false);
      }else{
        dispatch(RegisterUserAction(user)).then(()=>{
          navigate(`/login`);
        });
      }

     
 
    };
  
    return (
      <Grow in={true} timeout={1000}>
  
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card variant='outlined' className='CreateGameCard'>
            
            <CardHeader
              className='CreateGameCardHeader'
              title='Sign Up'
              titleTypographyProps={{ variant: 'h4' }}
            />
  
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
              <TextField
                className='CreateGameTextField'               
                id='filled-required 2'
                label='Password'
                type='password'
                placeholder='Enter your password'
                defaultValue={password}
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
                defaultValue={cPassword}
                variant='outlined'
                {...register("Cpassword", { required: "Confirm Password is required." })}
                error={Boolean(errors.Cpassword)}
                helperText={errors.Cpassword?.message?.toString()}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setCPassword(event.target.value)}
              />

               <FormGroup 
                 style={{ display: "block", marginTop: "0px" ,marginRight:"100px" }}>
                      <FormControlLabel 
                        control={
                          <Checkbox {...register("tnc", { required: "Please aggre to our terms and condtions" })} />
                        } 
                        label="I aggree to all the terms and conditions" 
                      />
                </FormGroup> 
              
                <FormHelperText style={{color:'#d32f2f'}}>{errors.tnc?.message?.toString()}</FormHelperText>

                
                {!isRegisterSuccessful && 
                  <div className='errorMessage'>
                    {message}
                  </div>
                }

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
  