import NewFilmForm from "../components/meetups/NewFilmForm";
import {useHistory} from "react-router-dom";

function NewFilmPage() {
    const history = useHistory();

    function addFilmHandler(filmData) {
        fetch('https://react-technologie-sieciowe-default-rtdb.firebaseio.com/films.json',
            {
                method: 'POST',
                body: JSON.stringify(filmData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(() => {
                history.replace('/')
            });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewFilmForm onAddFilm={addFilmHandler}/>
        </section>
    )
}

export default NewFilmPage;