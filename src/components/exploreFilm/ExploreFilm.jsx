import React, { useState } from 'react';
import './ExploreFilm.css';
import { film_list } from '../../assets/assets';

const ExploreFilm = () => {
  const [imageArray, setImageArray] = useState(film_list);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isAddingImage, setIsAddingImage] = useState(false); // State untuk menampilkan input

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleDeleteImage = (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete image with id ${id}?`);
    if (confirmDelete) {
      const filteredArray = imageArray.filter((image) => image._id !== id);
      setImageArray(filteredArray);
      setSelectedImage(null);
    }
  };

  const handleEditImage = (image) => {
    setIsEditMode(true);
    setSelectedImage(image);
    setNewTitle(image.title);
  };

  const handleSaveEditedImage = (e) => {
    e.preventDefault();
    if (!newTitle) {
      setErrorMessage('Title cannot be empty.');
      return;
    }
    const newImage = e.target.files[0];
    const updatedImageArray = imageArray.map((image) => {
      if (image._id === selectedImage._id) {
        return {
          ...image,
          poster: newImage ? URL.createObjectURL(newImage) : image.poster,
          title: newTitle,
        };
      }
      return image;
    });
    setImageArray(updatedImageArray);
    resetForm();
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    if (!newTitle) {
      setErrorMessage('Title cannot be empty.');
      return;
    }
    const newImage = e.target.files[0];
    if (!newImage) {
      setErrorMessage('Please select an image.');
      return;
    }
    const newImageObject = {
      _id: `new-${imageArray.length + 1}`,
      title: newTitle,
      poster: URL.createObjectURL(newImage),
    };
    setImageArray([...imageArray, newImageObject]);
    resetForm();
  };

  const resetForm = () => {
    setNewTitle('');
    setSelectedImage(null);
    setIsEditMode(false);
    setIsAddingImage(false); // Reset state isAddingImage
    setErrorMessage('');
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Video Unggulan</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quas nobis tempora saepe unde libero distinctio tempore, enim deserunt, maxime minima illum ut inventore harum. Natus beatae exercitationem maiores facere.
      </p>

      <div className="btn-crud">
        <button onClick={() => setIsAddingImage(true)}>Add Image</button>
        
        {isAddingImage && (
          <>
            <input
              type="text"
              placeholder="Enter title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <div className='custom-file-input'>
              <input type="file" id="add-emage-input" onChange={handleAddImage} accept='image/*' />
              <label htmlFor="add-emage-input">
                <span>Select Image</span>
              </label>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </>
        )}
      </div>

      <div className="explore-menu-list">
        {imageArray.map((item, index) => {
          return (
            <div key={index} onClick={() => handleImageClick(item)} className="explore-menu-list-item">
              <img src={ item.poster} alt={item.alt} />
              <p>{item.title}</p>
              {selectedImage && selectedImage._id === item._id && (
                <div>
                  <button onClick={() => handleDeleteImage(item._id)} style={{ marginRight: '10px ' }}>Delete</button>
                  <button onClick={() => handleEditImage(item)}>Edit</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isEditMode && (
        <div>
          <h2 >Edit Image</h2>
          <input type="file" onChange={(e) => handleSaveEditedImage(e)} />
          <input
            type="text"
            placeholder="Edit title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <img src={selectedImage.poster} alt={selectedImage.alt} />
          <button onClick={() => handleSaveEditedImage()}>Save</button>
        </div>
      )}
      <hr />
    </div>
  );
};

export default ExploreFilm;

/*
abi
import React, { useState } from 'react';
import './ExploreFilm.css';
import { film_list } from '../../assets/assets';

const ExploreFilm = () => {
  const [imageArray, setImageArray] = useState(film_list);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleDeleteImage = (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete image with id ${id}?`);
    if (confirmDelete) {
      const filteredArray = imageArray.filter((image) => image._id !== id);
      setImageArray(filteredArray);
      setSelectedImage(null);
    }
  };

  const handleEditImage = (image) => {
    setIsEditMode(true);
    setSelectedImage(image);
    setNewTitle(image.title);
  };

  const handleSaveEditedImage = (e) => {
    e.preventDefault();
    if (!newTitle) {
      setErrorMessage('Title cannot be empty.');
      return;
    }
    const newImage = e.target.files[0];
    const updatedImageArray = imageArray.map((image) => {
      if (image._id === selectedImage._id) {
        return {
          ...image,
          poster: newImage ? URL.createObjectURL(newImage) : image.poster,
          title: newTitle,
        };
      }
      return image;
    });
    setImageArray(updatedImageArray);
    resetForm();
  };


  const handleAddImage = (e) => {
    e.preventDefault();
    if (!newTitle) {
      setErrorMessage('Title cannot be empty.');
      return;
    }
    const newImage = e.target.files[0];
    const newImageObject = {
      _id: `new-${imageArray.length + 1}`,
      title: newTitle,
      poster: URL.createObjectURL(newImage),
    };
    setImageArray([...imageArray, newImageObject]);
    resetForm();
  };

  const resetForm = () => {
    setNewTitle('');
    setSelectedImage(null);
    setIsEditMode(false);
    setErrorMessage('');
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Video Unggulan</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quas nobis tempora saepe unde libero distinctio tempore, enim deserunt, maxime minima illum ut inventore harum. Natus beatae exercitationem maiores facere.
      </p>

      <div className="btn-crud">
        <div className='custom-file-input'>
          <input type="file" id="add-emage-input" onChange={handleAddImage} accept='image/*' />
          <label htmlFor="add-emage-input">
            <span>Add Image</span>
          </label>
        </div>
        <input
          type="text"
          placeholder="Enter title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
      </div>


      <div className="explore-menu-list">
        {imageArray.map((item, index) => {
          return (
            <div key={index} onClick={() => handleImageClick(item)} className="explore-menu-list-item">
              <img src={item.poster} alt={item.alt} />
              <p>{item.title}</p>
              {selectedImage && selectedImage._id === item._id && (
                
                <div>
                  <button onClick={() => handleDeleteImage(item._id)} style={{ marginRight: '10px' }}>Delete</button>
                  <button onClick={() => handleEditImage(item)}>Edit</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isEditMode && (
        <div>
          <h2>Edit Image</h2>
          <input type="file" onChange={(e) => handleSaveEditedImage(e)} />
          <input
            type="text"
            placeholder="Edit title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <img src={selectedImage.poster} alt={selectedImage.alt} />
          <button onClick={() => handleSaveEditedImage()}>Save</button>
        </div>
      )}
      <hr />
    </div>
  );
};

export default ExploreFilm;






import React, { useState } from 'react';
import './ExploreFilm.css';
import { film_list } from '../../assets/assets';

const ExploreFilm = () => {
  const [imageArray, setImageArray] = useState(film_list);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState('');

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleDeleteImage = (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete image with id ${id}?`);
    if (confirmDelete) {
      const filteredArray = imageArray.filter((image) => image._id !== id);
      setImageArray(filteredArray);
      setSelectedImage(null);
    }
  };

  const handleEditImage = (image) => {
    setIsEditMode(true);
    setSelectedImage(image);
    setNewTitle(image.title); // Set the title for editing
  };

  const handleSaveEditedImage = (e) => {
    const newImage = e.target.files[0];
    const updatedImageArray = imageArray.map((image) => {
      if (image._id === selectedImage._id) {
        return {
          ...image,
          poster: newImage ? URL.createObjectURL(newImage) : image.poster,
          title: newTitle, // Update the title
        };
      }
      return image;
    });
    setImageArray(updatedImageArray);
    setIsEditMode(false);
    setNewTitle(''); // Reset title input
    setSelectedImage(null); // Clear selected image
  };

  const handleAddImage = (e) => {
    const newImage = e.target.files[0];
    const newImageObject = {
      _id: `new-${imageArray.length + 1}`,
      title: newTitle || 'New Image',
      poster: URL.createObjectURL(newImage),
    };
    setImageArray([...imageArray, newImageObject]);
    setNewTitle(''); // Reset title input
    e.target.value = '';
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Video Unggulan</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quas nobis tempora saepe unde libero distinctio tempore, enim deserunt, maxime minima illum ut inventore harum. Natus beatae exercitationem maiores facere.
      </p>

      <div className="btn-crud">
        <div className='custom-file-input'>
          <input type="file" id="add-emage-input" onChange={handleAddImage} accept='image/*' />
          <label htmlFor="add-emage-input">
            <span>Add Image</span>
          </label>
        </div>
        <input
          type="text"
          placeholder="Enter title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </div>

      <div className="explore-menu-list">
        {imageArray.map((item, index) => {
          return (
            <div key={index} onClick={() => handleImageClick(item)} className="explore-menu-list-item">
              <img src={item.poster} alt={item.alt} />
              <p>{item.title}</p>
              {selectedImage && selectedImage._id === item._id && (
                <div>
                  <button onClick={() => handleDeleteImage(item._id)} style={{ marginRight: '10px' }}>Delete</button>
                  <button onClick={() => handleEditImage(item)}>Edit</button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {isEditMode && (
        <div>
          <h2>Edit Image</h2>
          <input type="file" onChange={(e) => handleSaveEditedImage(e)} />
          <input
            type="text"
            placeholder="Edit title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <img src={selectedImage.poster} alt={selectedImage.alt} />
          <button onClick={() => handleSaveEditedImage()}>Save</button>
        </div>
      )}
      <hr />
    </div>
  );
};

export default ExploreFilm;
*/