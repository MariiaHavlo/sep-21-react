import React from 'react';
import {Link} from "react-router-dom";

import css from "./album.module.css";

const Album = ({album}) => {
    const {albumId, userId, title} = album;
    return (

        <div className={css.album}>
            <Link to={`${albumId}/photos`} state={album}>{userId}) {title}</Link>
        </div>
    );
};

export default Album;