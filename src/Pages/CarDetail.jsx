import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBBadge
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { getByIdCar } from '../react/features/car/carSlice';
export default function CarDetail() {
  let { id } = useParams();

  const dispatch = useDispatch();

  const {car} = useSelector(state => state.cars)
  console.log(car)
  useEffect(() => {
    dispatch(getByIdCar(id))
  }, [id])

  
  return (
    <div className='mt-4'>
      <MDBCard>
        <MDBCardHeader>{car.data.plates}       
        <MDBBadge color="success" pill>
          {car.data.state}
        </MDBBadge></MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>{car.data.brandName}</MDBCardTitle>
          <MDBCardText>{car.data.modelName}</MDBCardText>

          <MDBBtn href='#'>Go somewhere</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}
