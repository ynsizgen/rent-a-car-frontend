import React from 'react'
import { useState , useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import ProductService from '../services/productService';
export default function CarList() {

    const [cars, setCars] = useState([])

    useEffect(() => {
        let productService = new ProductService()
        productService.getProduct().then(result => setCars(result.data))
    })
    

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Araba Markası</th>
                        <th>Araba Modeli</th>
                        <th>Türü</th>
                        <th>Fiyatı</th>
                        <th>Manuel / Auto</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars?.map(cars => (
                            <tr key ={cars.id}>
                                <td>{cars.brandName}</td>
                                <td>{cars.modelName}</td>
                                <td>{cars.enumVehicleType}</td>
                                <td>{cars.dailyPrice}</td>
                                <td>{cars.manuelAuto}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
}
