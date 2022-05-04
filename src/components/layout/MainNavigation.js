import {Link} from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Technologie Sieciowe</div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'} exact>All Films</Link>
                    </li>
                    <li>
                        <Link to={'/new-film'}>Add New Film</Link>
                    </li>
                    <li>
                        <Link to={'/production'}>Production</Link>
                    </li>
                </ul>
            </nav>
        </header>)
}

export default MainNavigation;