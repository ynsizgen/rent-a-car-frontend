import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductService from '../services/productService';
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBBadge
} from 'mdb-react-ui-kit';
export default function CarDetail() {
  let { id } = useParams();

  const [car, setCar] = useState({})

  useEffect(() => {
    let productService = new ProductService();
    productService.getCarDetail(id).then((result) => setCar(result.data))
  }, [])

  
  return (
    <div className='mt-4'>
      <MDBCard>
        <MDBCardHeader>{car.plates}       <MDBBadge color="success" pill>
          {car.state}
        </MDBBadge></MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle>{car.brandName}</MDBCardTitle>
          <MDBCardText>{car.modelName}</MDBCardText>

          <MDBBtn href='#'>Go somewhere</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}
