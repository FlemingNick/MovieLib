import React from 'react'


const MovieEntry = (props) => {

    return(
        <li className='MovieEntry'>
            <ul className='EntryDetails'>
                <li className='MovieTitle'>Title: {props.title}</li>
                <li className='MovieScore'>Metascore: {props.score}/100</li>
                <li className='MovieRelease'>Release: {props.release}</li>
                <li className='MoviePlot'>Plot: {props.plot}</li>
            </ul>
        </li>
    )

}

export default MovieEntry


