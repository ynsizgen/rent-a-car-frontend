import React from 'react'
import Categories from './Categories'
import CarList from '../Pages/CarList'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Dashboard() {
  return (
    <div>
      <MDBRow className='mb-6'>
        <MDBCol size='6' lg='2'>
          <Categories />        </MDBCol>{' '}
        <MDBCol size='6' lg='9'>
          <CarList />
        </MDBCol>
      </MDBRow>


    </div>

  )
}
