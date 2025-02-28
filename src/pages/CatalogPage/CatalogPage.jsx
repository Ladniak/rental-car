import CarList from "../../components/CarList/CarList"
import FilterForm from "../../components/FilterForm/FilterForm"

import module from "./CatalogPage.module.css"

const CatalogPage = () => {
    return (
        <div className={module.container}>
            <FilterForm />
            <CarList />
        </div>
    )
}

export default CatalogPage