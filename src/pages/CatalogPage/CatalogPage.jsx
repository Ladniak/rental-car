import { useSelector } from "react-redux";
import { selectPage, selectTotalPages } from "../../redux/cars/selectors";
import CarList from "../../components/CarList/CarList";
import FilterForm from "../../components/FilterForm/FilterForm";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import module from "./CatalogPage.module.css";

const CatalogPage = () => {
    const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);

    return (
        <div className={module.container}>
            <FilterForm />
            <CarList />
            {page < totalPages && <LoadMoreBtn />}
        </div>
    );
};

export default CatalogPage;
