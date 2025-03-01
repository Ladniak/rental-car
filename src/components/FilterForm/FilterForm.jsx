import Select from "react-select";

import module from "./FilterForm.module.css";

import { customStylesBrand } from "../../utils/selectBrand.js";
import { customStylesPrice } from "../../utils/selectPrice.js";

import { selectFilter } from "../../redux/filters/selectors.js";
import { fetchCars, fetchCarsBrand } from "../../redux/cars/operations.js";
import { selectCarsBrand } from "../../redux/cars/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setFilter } from "../../redux/filters/slice.js";

const FilterForm = () => {
    const dispatch = useDispatch();
    const brand = useSelector(selectCarsBrand);
    const filter = useSelector(selectFilter);

    useEffect(() => {
        dispatch(fetchCarsBrand());
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchCars({}));
    }, [dispatch]);

    const priceOptions = Array.from({ length: (150 - 30) / 10 + 1 }, (_, i) => {
        const value = (30 + i * 10).toString();
        return { label: value, value };
    });

    return (
        <>
            <div className={module.container}>
                <div>
                    <p className={module.title}>Car brand</p>
                    <Select
                        options={brand?.map((brand) => ({ label: brand, value: brand }))}
                        styles={customStylesBrand}
                        placeholder="Choose a brand"
                        onChange={(e) => dispatch(setFilter({ brand: e.value }))}
                        value={filter.brand ? { label: filter.brand, value: filter.brand } : null}
                    />
                </div>
                <div>
                    <p className={module.title}>Price/ 1 hour</p>
                    <Select
                        options={priceOptions}
                        styles={customStylesPrice}
                        placeholder="Choose a price"
                        onChange={(e) => dispatch(setFilter({ rentalPrice: e.value }))}
                        value={filter.rentalPrice ? { label: filter.rentalPrice.toString(), value: filter.rentalPrice.toString() } : null}
                    />
                </div>
                <div>
                    <p className={module.title}>Car mileage / km</p>
                    <div className={module.inputsDiv}>
                        <input
                            type="text"
                            className={module.inputFrom}
                            placeholder="From"
                        />
                        <input
                            type="text"
                            className={module.inputTo}
                            placeholder="To"
                        />
                    </div>
                </div>
                <button type="button" className={module.filterBtn} onClick={() => dispatch(fetchCars(filter))} >
                    Search
                </button>
            </div>
        </>
    );
};

export default FilterForm