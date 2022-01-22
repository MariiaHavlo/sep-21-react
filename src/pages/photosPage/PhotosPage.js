import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {photosService} from "../../services/photos.service";
import Photo from "../../components/photo/Photo";


const PhotosPage = () => {
    const {albumId}=useParams();
    const[photos,setPhotos]=useState();

    useEffect(()=>{
        photosService.getById(albumId)
            .then(value => setPhotos([...value]))
    },[albumId])
    return (
        <div>
            {photos && photos.map(photo=><Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export default PhotosPage;