import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCars } from '../../redux/cars/selectors';
import { fetchCars } from '../../redux/cars/operations';
import Car from '../Car/Car';
import module from "./CarList.module.css"

const CarList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);

    console.log(cars.cars);

    useEffect(() => {
        dispatch(fetchCars());
    }, [dispatch])

    return (
        <ul className={module.carList}>
            {cars.cars?.map((car) =>
                <li className={module.listItem} key={car.id}>
                    <Car id={car.id} />
                </li>
            )}
        </ul>
    )
}

export default CarList