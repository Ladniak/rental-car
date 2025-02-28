import { Link } from "react-router-dom"
import module from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={module.container}>
            <div className={module.info}>
                <h1 className={module.header}>Find your perfect rental car</h1>
                <p className={module.paragraph}>Reliable and budget-friendly rentals for any journey</p>
                <Link className={module.linkButton} to="/catalog">View Catalog</Link>
            </div>
        </div>
    )
}

export default HomePage