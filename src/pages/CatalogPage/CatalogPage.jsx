import CarList from "../../components/CarList/CarList"

import module from "./CatalogPage.module.css"

const CatalogPage = () => {
    return (
        <div className={module.container}>
            <CarList />
        </div>
    )
}

export default CatalogPage