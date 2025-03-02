import { useSelector, useDispatch } from "react-redux";
import { selectCars, selectFavouriteCars } from "../../redux/cars/selectors";
import { toggleFavourite } from "../../redux/cars/slice";

import module from "./Car.module.css";
import { Link } from "react-router-dom";

const Car = ({ id }) => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const favourites = useSelector(selectFavouriteCars);

    const car = cars.find(car => car.id === id);
    const address = car.address.split(", ");
    const urlState = "/";

    const isFavourite = favourites.some(fav => fav.id === car.id);

    const formatted = car?.mileage ? car.mileage.toLocaleString("ua-UA").replace(",", " ") : "N/A";

    const handleFavouriteClick = () => {
        dispatch(toggleFavourite(car));
    };

    return (
        <div className={module.card}>
            <div className={module.imgDiv}>
                <img alt={`${car.title}`} className={module.carImg} src={car.img} />
                <button className={module.favouriteBtn} onClick={handleFavouriteClick}>
                    {isFavourite ? (
                        <svg width="20" height="18" viewBox="0 0 16 15" fill="#3470ff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.9999 2.74805L7.2829 2.01105C5.5999 0.281049 2.5139 0.878049 1.39989 3.05305C0.876895 4.07605 0.758895 5.55305 1.71389 7.43805C2.63389 9.25305 4.5479 11.427 7.9999 13.795C11.4519 11.427 13.3649 9.25305 14.2859 7.43805C15.2409 5.55205 15.1239 4.07605 14.5999 3.05305C13.4859 0.878049 10.3999 0.280049 8.7169 2.01005L7.9999 2.74805Z" />
                        </svg>
                    ) : (
                        <svg width="20" height="18" viewBox="0 0 16 15" fill="none" stroke="#f2f4f7" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.9999 2.74805L7.2829 2.01105C5.5999 0.281049 2.5139 0.878049 1.39989 3.05305C0.876895 4.07605 0.758895 5.55305 1.71389 7.43805C2.63389 9.25305 4.5479 11.427 7.9999 13.795C11.4519 11.427 13.3649 9.25305 14.2859 7.43805C15.2409 5.55205 15.1239 4.07605 14.5999 3.05305C13.4859 0.878049 10.3999 0.280049 8.7169 2.01005L7.9999 2.74805Z" />
                        </svg>
                    )}
                </button>
            </div>

            <div className={module.info}>
                <div className={module.header}>
                    <p className={module.title}>{car.brand} <span className={module.modal}>{car.model}</span>, {car.year}</p>
                    <p className={module.price}>{car.rentalPrice} $</p>
                </div>
            </div>
            <div className={module.additionalInfo}>
                <p className={module.first}>{address[1]} | {address[2]} | {car.rentalCompany}</p>
                <p className={module.second}>{car.type} | {formatted} km</p>
            </div>
            <Link className={module.linkBtn} state={{ from: urlState }} to={`/catalog/${car.id}`}>
                Read more
            </Link>
        </div>
    );
}

export default Car;