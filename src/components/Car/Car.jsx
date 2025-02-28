// import { useSelector } from "react-redux"
// import { selectCars } from "../../redux/cars/selectors"

// import module from "./Car.module.css"
// import { Link } from "react-router-dom";

// const Car = ({ id }) => {
//     const cars = useSelector(selectCars);
//     const car = cars.cars.find(car => car.id === id);
//     const address = car.address.split(", ");
//     const urlState = "/";

//     return (
//         <div className={module.card}>
//             <img
//                 alt={`${car.title}`}
//                 className={module.carImg}
//                 src={car.img}
//             />
//             <div className={module.info}>
//                 <div className={module.header}>
//                     <p className={module.title}>{car.brand} <span className={module.modal}>{car.model}</span>, {car.year}</p>
//                     <p className={module.price}>{car.rentalPrice} $</p>
//                 </div>
//             </div>
//             <div className={module.additionalInfo}>
//                 <p className={module.first}>{address[1]} | {address[2]} | {car.rentalCompany}</p>
//                 <p className={module.second}>{car.type} | {car.mileage}</p>
//             </div>
//             <Link
//                 className={module.linkBtn}
//                 state={{ from: urlState }}
//                 to={`/catalog/${car.id}`}
//             >
//                 Read more
//             </Link>
//         </div>
//     )
// }

// export default Car