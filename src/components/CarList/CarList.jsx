import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Loading, selectCars } from '../../redux/cars/selectors';
import { fetchCars } from '../../redux/cars/operations';

import Car from '../Car/Car';

import ScaleLoader from "react-spinners/ScaleLoader";
import module from "./CarList.module.css"

const CarList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const loading = useSelector(Loading);

    useEffect(() => {
        dispatch(fetchCars({}));
    }, [dispatch])

    return (
        <>
            {loading && (
                <div className={module.loaderWrapper}>
                    <ScaleLoader color="#3498db" />
                </div>
            )}
            <ul className={module.carList}>
                {cars.cars?.map((car) => (
                    <li className={module.listItem} key={car.id}>
                        <Car id={car.id} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CarList