import React from 'react'
import './App.css';
import {makeStyles} from '@material-ui/core'
import Header from './components/Header';
import Banner from './components/Banner';
const useStyles= makeStyles(() => ({
  app:{
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
  }
}))


function App() {
  const classes = useStyles()
  return (
    <div className = {classes.app}>
         <Header/>
         <Banner/>
    </div>
  );
}

export default App;
