import React from 'react';
import classes from './SocialMedia.module.css';
const SocialMedia = ({data}) => {
    return (
        <div className={`btn mx-2 mx-sm-0 ${classes.socialMediaSection}`}><i className={`${data.icon} ${classes.socialMediaIcon}`}></i></div>
    );
};

export default SocialMedia;