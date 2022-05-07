import React from "react";
import PropTypes from "prop-types";
import { Popup } from "./Popup";

export const Gallery = ({ listOfPhotos, openPhoto, selectedImage }) => {
  return (
    <div id="galery">
      <h2>
        Galery:{" "}
        {listOfPhotos.slice(0, 50).map((photo) => {
          return (
            <div onClick={() => openPhoto(photo)} key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </div>
          );
        })}
        {selectedImage !== "" && <Popup selektiranaSlika={selectedImage} />}
      </h2>
    </div>
  );
};

Gallery.propTypes = {
  listOfPhotos: PropTypes.arrayOf(PropTypes.object).isRequired,
  openPhoto: PropTypes.func,
  selectedImage: PropTypes.string,
};
