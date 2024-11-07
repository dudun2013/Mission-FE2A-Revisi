// src/components/FilmList.js
import React from 'react';
import useFilm from '../hooks/useFilm';

const FilmList = () => {
    const { films, loading, error } = useFilm();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {films.map(film => (
                <li key={film.id}>
                    <h2>{film.title}</h2>
                    <p>{film.description}</p>
                </li>
            ))}
        </ul>
    );
};

export default FilmList;