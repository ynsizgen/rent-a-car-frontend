import React from 'react'
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
          <Categories />       
        </MDBCol>
        <MDBCol size='6' lg='9'>
          <Routes>
            
            <Route path='/' Component={Home}></Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='/cars' Component={CarList}></Route>
            <Route path='/confCars' Component={ConfortCarsList}></Route>
            <Route path='/ecoCars' Component={EconomyCarsList}></Route>
            <Route path='/confortCars' Component={ConfortCarsList}></Route>
            <Route path='/economyCars' Component={EconomyCarsList}></Route>
            <Route path='/cars/:id' Component={CarDetail}></Route>
            <Route path='/confCars/:id' Component={CarDetail}></Route>
            <Route path='/ecoCars/:id' Component={CarDetail}></Route>
            <Route path='/userDetail' Component={UserDetail}></Route>
          </Routes> 
        </MDBCol>
      </MDBRow>


    </div>

  )
}
