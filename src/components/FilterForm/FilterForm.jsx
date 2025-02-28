import Select from "react-select";

import module from "./FilterForm.module.css"
import { customStylesBrand } from "../../utils/selectBrand.js";
import { customStylesPrice } from "../../utils/selectPrice.js";

import { selectCarsBrand } from "../../redux/cars/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCarsBrand } from "../../redux/cars/operations.js";

const FilterForm = () => {
    const dispath = useDispatch();
    const brand = useSelector(selectCarsBrand);

    useEffect(() => {
        dispath(fetchCarsBrand());
    })

    const priceOptions = Array.from({ length: (150 - 30) / 10 + 1 }, (_, i) => {
        const value = 30 + i * 10;
        return { label: `${value}`, value };
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
                    />
                </div>
                <div>
                    <p className={module.title}>Price/ 1 hour</p>
                    <Select
                        options={priceOptions}
                        styles={customStylesPrice}
                        placeholder="Choose a price"
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
                <button type="button" className={module.filterBtn} >
                    Search
                </button>
            </div>
        </>
    );
};

export default FilterForm