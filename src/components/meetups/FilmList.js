import classes from './FilmList.module.css'
import FilmItem from "./FilmItem";

function FilmList(props) {
    return (
        <ul className={classes.list}>
            {props.films.map(film => <FilmItem
                key={film.id}
                id={film.id}
                name={film.name}
                title={film.title}
                lastName={film.lastName}
                duration={film.duration}
                production={film.production}
            />)}
        </ul>
    )
}

export default FilmList