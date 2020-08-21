import React, {useEffect, useState} from 'react'
import firebase from "./firebase";

const useLibrary = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        firebase
            .firestore()
            .collection('movies')
            .onSnapshot((snapshot) => {
                const newMovie = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setMovies(newMovie)
            })
    }, [])

    return movies
}

export default useLibrary