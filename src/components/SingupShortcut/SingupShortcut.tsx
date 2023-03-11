import {
  Card,
  CardContent,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState,ChangeEvent,FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './SingupShortcut.css';
import { IUser } from '../../types/User';

export const SingupShortcut = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const user: IUser = {
      email: email,
    };

   // const newGameId = await addNewGame(game);
    navigate(`/register`);
  };

  useEffect(() => {
    
  }, []);

  
  return (
    <Card variant='outlined' className='RecentGamesCard'>
      <CardHeader
        className='RecentGamesCardTitle'
        title='Intrested to join our platform'
        titleTypographyProps={{ variant: 'h6', noWrap: true }}
      />
      <CardContent className='RecentGamesCardContent'>
      
          <TableContainer className='RecentGamesTableContainer'>

              <form onSubmit={handleSubmit}>
               
              <Button type='submit' variant='contained' color='primary' className='CreateGameButton'>
                Sign Up here
              </Button>

              </form>
                
          </TableContainer>
        
      </CardContent>
    </Card>
  );
};
