import module from "./LoadMoreBtn.module.css"

const LoadMoreBtn = () => {

    const onClick = () => {

    }

    return (
        <button type="button" className={module.button} onClick={onClick}>
            Load more
        </button>
    )
}

export default LoadMoreBtn