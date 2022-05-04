import classes from './FilmItem.module.css'
import Card from '../ui/Card'
import {useHistory} from "react-router-dom";

function FilmItem(props) {
    const history = useHistory()
    function deleteFilmHandler(filmData) {
        fetch('https://react-technologie-sieciowe-default-rtdb.firebaseio.com/films.json',
            {
                method: 'DELETE'
            }).then(() => {
                history.replace('/production')
        })
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.content}>
                    <h3>Title: {props.title}</h3>
                    <p>Director: {props.name} {props.lastName}</p>
                    <p>Duration: {props.duration} min</p>
                    <p>Year of Production: {props.production}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={deleteFilmHandler}>Delete</button>
                </div>
            </Card>
        </li>
    )
}

export default FilmItem