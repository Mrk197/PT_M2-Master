import styles from './Form.module.css';
import {useState} from 'react'

export default function Form({handleLogin}) {
    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' }); 

    const handleInputChange = (e) =>{
        e.preventDefault();
        setUserData({...userData, [e.target.name]:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return <div className={styles.login}>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="" value={userData.password} onChange={handleInputChange} />
            </div>
            <div>
                <input type="button" onClick={handleLogin} value="LOGIN" />
            </div>

        </form>
    </div>
}