import React from 'react';
import styles from './LeftSideBarAdmin.module.css';

const LeftSidebar = ({ setCurrentFunction }) => {
    return (
        <div className={styles.sidebar}>
            <button onClick={() => setCurrentFunction('Profile')} className={styles.btn}>Profile</button>
            <button onClick={() => setCurrentFunction('editUsers')} className={styles.btn}>Edit Users</button>
            <button onClick={() => setCurrentFunction('createGenre')} className={styles.btn}>Create Genre</button>
            <button onClick={() => setCurrentFunction('createMovie')} className={styles.btn}>Create Movie</button>
            <button onClick={() => setCurrentFunction('updateMovie')} className={styles.btn}>Update Movie</button>
        </div>
    );
};

export default LeftSidebar;
