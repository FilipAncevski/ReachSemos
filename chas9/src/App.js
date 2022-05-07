import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Gallery } from "./components/Gallery";
import { API_URL } from "./utils/constants";
import { func } from "prop-types";

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedImage, setSelectedImage] = useState({});

  function openPhoto(photo) {
    setSelectedImage(photo);
  }

  useEffect(() => {
    fetch(`${API_URL}/photos`)
      .then((res) => res.json())
      .then((json) => setPhotos(json))
      .catch((err) => alert(err));
  }, []);
  return (
    <div id="app">
      <Nav />
      <Routes>
        <Route
          path="/gallery"
          element={
            <Gallery
              listOfPhotos={photos}
              openPhoto={openPhoto}
              selectedImage={selectedImage.url}
            />
          }
        />
      </Routes>
    </div>
  );
};
