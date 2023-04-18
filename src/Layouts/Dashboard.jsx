import React, { useState } from 'react'
import Categories from './Categories'
import CarList from '../Pages/CarList'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Route, Routes, useLocation } from 'react-router-dom';
import ConfortCarsList from '../Pages/ConfortCarsList';
import EconomyCarsList from '../Pages/EconomyCarsList';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import CarDetail from '../Pages/CarDetail';
import UserDetail from '../Pages/UserDetail';
import CarAdd from '../Pages/CarAdd';


export default function Dashboard() {
  const location = useLocation();

  return (
    <div>
      <MDBRow className='mb-6'>
        <MDBCol size='3' lg='2'>
          { location.pathname !== '/' && <Categories/>}
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
            <Route path='/car/add' element={<CarAdd />} />
          </Routes>
        </MDBCol>    
      </MDBRow>
    </div>
  );
}

