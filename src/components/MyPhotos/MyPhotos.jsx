import React from 'react';
import s from './MyPhotos.module.css';
import PropTypes from 'prop-types';
import Headline from "../common/Headline/Headline";


const MyPhotos = (props) => {

    let addPhoto = () => {
        props.addPhoto();
    };

    let changePhoto = (e) => {
        let photo = e.target.value;
        props.changePhoto(photo);
    };

    let deleteUrlPhoto = () => {
        props.deleteUrlPhoto('');
    };

    let photos = props.myPhotos.photos.map((photo) => {
        return <img key={photo.id} className={s.ava} src={photo.photo} alt='This is my life'/>
    });

    return (
        <article className={s.page}>
            <Headline title={'MY PHOTOS'}/>
            {photos}
            <section>
                <textarea className={s.url} onChange={changePhoto}
                   placeholder='Add photo, please...' value={props.myPhotos.newPhoto}/>
                <button className={s.but} onClick={addPhoto}>Add photo</button>
                <button className={s.but} onClick={deleteUrlPhoto}>Clear</button>
            </section>
        </article>
    )
};

MyPhotos.propTypes = {
    state: PropTypes.object,
    messages: PropTypes.string,
    id: PropTypes.number,
};

export default MyPhotos;