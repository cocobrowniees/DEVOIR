import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApartmentList from './components/apartment-list'
import { GlobalContext } from './context'
import { Grid2 } from '@mui/material'

function App() {
  const {setApartmentList} = useContext(GlobalContext);

  async function findAllApartments() {
      const apiResponses = await fetch('http://localhost:4000/apartments');
      const results = await apiResponses.json();
      setApartmentList(results);
  }

  useEffect(() => {
    findAllApartments();
  }, []);

  return (
    <Grid2 container spacing={10}>
    <Grid2 size={8}>
      <ApartmentList/>
    </Grid2>

    <Grid2 size={8}>

    </Grid2>
  </Grid2>
  )
}

export default App
