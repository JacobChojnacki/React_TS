import FilmList from "../components/meetups/FilmList";
import {useState, useEffect} from "react";

function AllFilmsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedFilms, setLoadedFilms] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch(
            'https://react-technologie-sieciowe-default-rtdb.firebaseio.com/films.json'
        )
            .then(res => {
                return res.json();
            })
            .then(data => {
                const films = [];

                for (const key in data) {
                    const film = {
                        id: key,
                        ...data[key]
                    };
                    films.push(film)
                }

                setIsLoading(false)
                setLoadedFilms(films)
            });
    }, []);


    if (isLoading) {
        return (
            <section>
                <p>Loading... Please wait :(</p>
            </section>
        )
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <FilmList films={loadedFilms}/>
        </section>
    )
}

export default AllFilmsPage;