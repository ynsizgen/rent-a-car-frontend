import React, { useState } from 'react'
import Categories from './Categories'
import CarList from '../Pages/CarList'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Route, Routes } from 'react-router-dom';
import ConfortCarsList from '../Pages/ConfortCarsList';
import EconomyCarsList from '../Pages/EconomyCarsList';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import CarDetail from '../Pages/CarDetail';
import UserDetail from '../Pages/UserDetail';


export default function Dashboard() {
 

  return (
    <div>
      <MDBRow className='mb-6'>
        <MDBCol size='3' lg='2'>
          <Categories/>
        </MDBCol>
        <MDBCol size='6' lg='9'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cars' element={<CarList />} />
            <Route path='/confCars' element={<ConfortCarsList />} />
            <Route path='/ecoCars' element={<EconomyCarsList />} />
            <Route path='/confortCars' element={<ConfortCarsList />} />
            <Route path='/economyCars' element={<EconomyCarsList />} />
            <Route path='/cars/:id' element={<CarDetail />} />
            <Route path='/userDetail' element={<UserDetail />} />
          </Routes>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
