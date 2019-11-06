import React, { useState, useEffect } from 'react';
import styles from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true)
        // this.state.editMode = true
    };

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <article className={styles.status}>
            {!editMode &&
            <section>
                <div onDoubleClick={activateEditMode}>
                    {props.status || '======='}
                </div>
            </section>
            }
            {editMode &&
            <section>
                <input
                    onChange={onStatusChange}
                       autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}/>
            </section>}
        </article>
    );
};

export default ProfileStatusWithHooks;