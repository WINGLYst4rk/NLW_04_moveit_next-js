import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className= {styles.profilecontainer}>
            <img src="https://github.com/WINGLYst4rk.png" alt="Wingly Rodrigues" />
            <div>
                <strong>Wingly Rodrigues</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}