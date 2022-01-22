import React from 'react';

const Photo = ({photo}) => {
    const {albumId,title, url} = photo;
    return (
        <div>
            <div>{albumId}--{title}</div>
            <img src={url} alt="{title}"/>
        </div>
    );
};

export default Photo;