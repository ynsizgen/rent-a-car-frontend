import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ProductService from '../services/productService';

export default function CarDetail() {
   let {id} = useParams();

   const [car, setCar] = useState({})

   useEffect(() => {
      let productService = new ProductService();
      productService.getCarDetail(id).then((result) => setCar(result.data))
   }, [])
   

  return (
    <div>{car.id}</div>
  )
}
