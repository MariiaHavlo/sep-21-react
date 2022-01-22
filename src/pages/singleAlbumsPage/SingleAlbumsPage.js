import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import Album from "../../components/album/Album";


const SingleAlbumsPage = () => {
    const {id}=useParams();
    const[albums,setAlbums]=useState(null)


    useEffect(()=>{
        albumsService.getById(id).then(value=>setAlbums([...value]))
    },[id])
    return (
        <div>
            {albums && albums.map(album=><Album key={album.id} album={album}/>)}
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default SingleAlbumsPage;