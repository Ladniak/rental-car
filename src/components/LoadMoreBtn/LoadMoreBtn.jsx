import module from "./LoadMoreBtn.module.css";

import { nextPage } from "../../redux/cars/slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { Loading, selectPage, selectTotalPages } from "../../redux/cars/selectors";

import { ScaleLoader } from "react-spinners";

const LoadMoreBtn = () => {
    const dispatch = useDispatch();
    const page = useSelector(selectPage);
    const totalPages = useSelector(selectTotalPages);
    const loading = useSelector(Loading);

    const onClick = () => {
        dispatch(nextPage());
        dispatch(fetchCars({ filters: {}, page: page + 1 }));
    };

    return (
        <>
            {loading && (
                <div className={module.wrapper}>
                    <ScaleLoader color="#3498db" />
                </div>
            )}
            {!loading && (
                <button
                    type="button"
                    className={module.button}
                    onClick={onClick}
                    disabled={page >= totalPages}
                >
                    Load more
                </button>
            )}
        </>
    );

};

export default LoadMoreBtn;
