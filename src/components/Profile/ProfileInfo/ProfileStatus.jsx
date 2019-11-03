import React from 'react';
import styles from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,

    };

    activateEditMode = () => {
        this.setState({editMode: true})
        // this.state.editMode = true
    };

    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    };

    render() {
        return (<article className={styles.status}>
                {!this.state.editMode &&
                    <section>
                        <div onDoubleClick={this.activateEditMode}>
                            {this.props.status || '======='}
                        </div>
                    </section>
                }
                {this.state.editMode &&
                    <section>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}/>
                    </section>}
            </article>
        )
    }
}

export default ProfileStatus;