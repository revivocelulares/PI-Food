import React from 'react';
 import { useHistory } from 'react-router-dom';
import styles from "../inicio/inicio.module.css"

function Landing() {
    const history = useHistory();

     function handle_home(e) {
        e.preventDefault();
        history.push("/home");
    }
    return (
        <div className={styles.div}>
            <div>
                 <div className={styles.title}>
                    <h1>Healthy Recipes</h1>
                    <h1>For Everyone</h1>
                    <div className={styles.btn}>
                        <span onClick={handle_home}>Let's Go Inside</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
