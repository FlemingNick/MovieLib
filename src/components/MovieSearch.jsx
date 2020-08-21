import React, {useState, useEffect} from 'react';
import firebase from '../firebase'
import './MovieSearch.modules.css';

const MovieSearch = () => {
    const [input, setInput] = useState(null);
    const [movies, setMovies] = useState([])
    const API = 'https://imdb8.p.rapidapi.com/title/auto-complete?';
    let QUERY = '';

    const fetchMovies = async (request) => {
        await fetch(API + QUERY, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "b4b3d47079mshf8b4532b84c33a1p184711jsn39b88a9d16d1"
            }
        })
            .then(response => response.json())
            .catch(err  => {alert("Sorry, no such movie found")})
            .then(data => setInput(data));
    };

    const [value, setValues] = useState({});
    const handleSubmit = (event) => {
        if(event){
            event.preventDefault();
            QUERY = 'q=' + value.name;
            fetchMovies();
        }
    };
    const handleInputChange = event => {
        event.persist();
        setValues(inputs => ({...value, [event.target.name]: event.target.value}))
    };

    const handleButton = () => {
        //setMovies([...movies, {title: input.d[0].l, release: input.d[0].y, cast: input.d[0].s, img: input.d[0].i.imageUrl}])
        firebase.firestore().collection('movies').add({title: input.d[0].l, release: input.d[0].y, cast: input.d[0].s, img: input.d[0].i.imageUrl})
    };

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('movies')
            .onSnapshot((snapshot) => {
                const newMovie = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setMovies(newMovie)
            });
        return () => unsubscribe()
    }, []);





    return(
        <div className='MovieContainer'>
            <form  onSubmit={handleSubmit} className='SearchInput'>
                <input className="Inputfield" type='name' placeholder="Title..." name='name' onChange={handleInputChange} value={value.name}/>
                <input className="Submit" type='submit' value='send'/>
            </form>
            {input &&
            <ul className='InputContainer'>
                <ul className='InputText'>
                    <li className='InputTitle'>Title: {input.d[0].l}</li>
                    <li className='InputRelease'>Release: {input.d[0].y}</li>
                    <li className='InputCast'>Cast: {input.d[0].s}</li>
                    <button onClick={handleButton}>Hinzufügen</button>
                </ul>
                <li className='InputImage'><img src={input.d[0].i.imageUrl} style={{width: "130px", height: "200px"}} alt={"title-cover"}/> </li>
            </ul>
            }
            <div className='Library'>
                <h1>Library</h1>
                {(movies.length > 0) &&
                <div className='LibraryEntries'>
                    {movies.map(movie => (
                        <div className='LibraryEntry' key={movies.indexOf(movie)}>
                            <img className='EntryImage' src={movie.img} style={{width: "150px", height: "200px"}} alt={"title-cover"}/>
                            <ul className='EntryText'>
                                <li><b>Title: {movie.title}</b></li>
                                <li>Release: {movie.release}</li>
                                <li>Cast: {movie.cast}</li>
                            </ul>
                            <p>Delete</p>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
};

export default MovieSearch