const CarPage = () => {
    return (
        <div>CarPage</div>
    )
}

export default CarPage
// import { useParams } from "react-router"
// import { useDispatch, useSelector } from "react-redux"
// import { selectCars } from "../../redux/cars/selectors"

// import RentalForm from "../../components/RentalForm/RentalForm";

// import module from "./CarPage.module.css";
// import { useEffect } from "react";
// import { fetchCarById } from "../../redux/cars/operations";

// const CarPage = () => {
//     const { id } = useParams()
//     const car = useSelector(selectCars);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchCarById(id));
//     }, [dispatch, id]);

//     if (!car) {
//         return <p>Loading cars...</p>;
//     }

//     const address = car?.address ? car.address.split(", ") : [];
//     const formatted = car?.mileage ? car.mileage.toLocaleString("ua-UA").replace(",", " ") : "N/A";

//     return (
//         <div className={module.container}>
//             <div className={module.firstDiv}>
//                 <img
//                     alt={`${car.title}`}
//                     className={module.carImg}
//                     src={car.img}
//                 />
//                 <RentalForm />
//             </div>
//             <div className={module.secondDiv}>
//                 <div className={module.information}>
//                     <p className={module.title}>{car.brand} {car.model}, {car.year}</p>
//                     <div className={module.paragraph}>
//                         <p>
//                             <svg className={module.icon}>
//                                 <use href="../../../public/symbol-defs.svg#icon-map"></use>
//                             </svg>
//                             {address[1]}, {address[2]}
//                         </p>
//                         <p>Mileage: {formatted} km</p>
//                     </div>
//                 </div>
//                 <p className={module.price}>${car.rentalPrice} </p>
//                 <p className={module.desc}>{car.description}</p>
//                 <div className={module.moreInfo}>
//                     <div className={module.rentalCond}>
//                         <h2 className={module.rentTitle}>Rental Conditions: </h2>
//                         <ul className={module.list}>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-check-circle"></use>
//                                     </svg>
//                                 </span>
//                                 Minimum age : 25
//                             </li>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-check-circle"></use>
//                                     </svg>
//                                 </span>
//                                 Security deposite required
//                             </li>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-check-circle"></use>
//                                     </svg>
//                                 </span>
//                                 Valid driver’s license
//                             </li>
//                         </ul>
//                     </div>
//                     <div className={module.rentalCond}>
//                         <h2 className={module.rentTitle}>Car Specifications: </h2>
//                         <ul className={module.list}>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-calendar"></use>
//                                     </svg>
//                                 </span>
//                                 Year: {car.year}
//                             </li>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-car"></use>
//                                     </svg>
//                                 </span>
//                                 Type: {car.type}
//                             </li>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-fuel-pump"></use>
//                                     </svg>
//                                 </span>
//                                 Fuel Consumption: {car.fuelConsumption}
//                             </li>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-Group3"></use>
//                                     </svg>
//                                 </span>
//                                 Engine Size: {car.engineSize}
//                             </li>
//                         </ul>
//                     </div>
//                     <div className={module.rentalCond}>
//                         <h2 className={module.rentTitle}>Accessories and functionalities: </h2>
//                         <ul className={module.list}>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-check-circle"></use>
//                                     </svg>
//                                 </span>
//                                 Leather seats
//                             </li>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-check-circle"></use>
//                                     </svg>
//                                 </span>
//                                 Panoramic sunroof
//                             </li>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-check-circle"></use>
//                                     </svg>
//                                 </span>
//                                 Remote start
//                             </li>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-check-circle"></use>
//                                     </svg>
//                                 </span>
//                                 Blind-spot monitoring
//                             </li>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-check-circle"></use>
//                                     </svg>
//                                 </span>
//                                 Power liftgate
//                             </li>
//                             <li className={module.item}>
//                                 <span className={module.itemSpan}>
//                                     <svg className={module.icon}>
//                                         <use href="../../../public/symbol-defs.svg#icon-check-circle"></use>
//                                     </svg>
//                                 </span>
//                                 Premium audio system
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default CarPage