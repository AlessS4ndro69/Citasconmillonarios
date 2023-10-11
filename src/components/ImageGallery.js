import React from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ImageGallery = ({ images, data}) => {

  console.log("estamso en imagegallery");
  //console.log(data)

  const {currentData} = useContext(UserContext);
  //console.log("currentData desde imagegallery: ",currentData);





  return (
    <div className="gallery">
      {currentData.map((item, index) => (
          
        <div key={index} className="image-container">       
          <Link to={`/info_lady/${item.id}`}> 
            { <img key={index} src={item.main_photo} alt={`Imagen ${index}`} className="gallery-image" />}
          </Link> 
          <InfoItem 
            name = {item.name} 
            age = {item.age}
            distance = {item.distance}
          />          
        </div>
        
      ))}
    </div>
  );
};

  const InfoItem = ({name, age, distance}) => {

    return (
      <div className="info-image">
          <div className='info-image-container'>
            <div className="person-name">{name}</div>
            <div className="person-age">{age}</div>
            <div className="person-age">{distance}km</div>
          </div>
      </div>
    );
  };
export default ImageGallery;
