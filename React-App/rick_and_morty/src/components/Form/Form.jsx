import styles from './Form.module.css';
import {useState} from 'react';
import { validation } from './validation';

export default function Form({login}) {
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' }); 

    const handleInputChange = (e) =>{
        e.preventDefault();
        setUserData({...userData, [e.target.name]:e.target.value});
        setErrors(validation(userData));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    };
    return <div className={styles.login}>
        <h1>RICK AND MORTY APP</h1>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input
                type="email"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
                />
                {errors.username && <p className={styles.warning}>{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="" value={userData.password} onChange={handleInputChange} />
                {errors.password && <p className={styles.warning}>{errors.password}</p>}
            </div>
            <div>
                <input type="submit" value="LOGIN" className={styles.button} />
            </div>

        </form>
    </div>
}