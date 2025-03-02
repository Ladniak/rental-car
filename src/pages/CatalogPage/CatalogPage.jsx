import module from "./CatalogPage.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCars } from "../../redux/cars/operations";
import { selectPage, selectTotalPages } from "../../redux/cars/selectors";

import CarList from "../../components/CarList/CarList";
import FilterForm from "../../components/FilterForm/FilterForm";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

const CatalogPage = () => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);

    useEffect(() => {
        dispatch(fetchCars({ filters: {}, page: 1 }));
    }, [dispatch]);

    return (
        <div className={module.container}>
            <FilterForm />
            <CarList />
            {page < totalPages && <LoadMoreBtn />}
        </div>
    );
};

export default CatalogPage;
