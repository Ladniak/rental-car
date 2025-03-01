import module from "./NotFoundPage.module.css"

const NotFoundPage = () => {
    return (
        <div className={module.container}>
            <h1 className={module.header}>Sorry, this page does not exist!</h1>
        </div>
    )
}

export default NotFoundPage