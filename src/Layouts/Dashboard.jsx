import React from 'react'
import Categories from './Categories'
import CarList from '../Pages/CarList'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Route, Routes } from 'react-router-dom';
import confortCarsList from '../Pages/confortCarsList';
import economyCarsList from '../Pages/economyCarsList';

export default function Dashboard() {
  return (
    <div>
      <MDBRow className='mb-6'>
        <MDBCol size='6' lg='2'>
          <Categories />       
        </MDBCol>
        <MDBCol size='6' lg='9'>
          <Routes>
            <Route path='/cars' Component={CarList}></Route>
            <Route path='/confortCars' Component={confortCarsList}></Route>
            <Route path='/economyCars' Component={economyCarsList}></Route>
          </Routes> 
        </MDBCol>
      </MDBRow>


    </div>

  )
}
