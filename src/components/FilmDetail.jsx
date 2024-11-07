import React from 'react';
import { useParams } from 'react-router-dom';

const FilmDetail = () => {
  const { title } = useParams(); // Mengambil parameter 'title' dari URL

  return (
    <div>
      <h1>Detail for Film: {title}</h1>
      {/* Bisa menambahkan logika lain untuk menampilkan detail berdasarkan judul */}
    </div>
  );
};z

export default FilmDetail;
