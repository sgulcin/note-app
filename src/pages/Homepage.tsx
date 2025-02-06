import styles from './Homepage.module.scss';
import './homepage.css';

interface HomeState {
    text : string;
    button : string;
}

function Homepage(){
    return(
        <div className={styles.title}>home page this!</div>
    )
}

export default Homepage;