import styles from './Button.module.css';

function Button(){

    const style = {
        "backgroundColor": "hsl(2000, 100%, 50%)",
        "color": "white",
        "borderRadius": "5px"
    };

    let count = 0;

    const handleClient = (e) => {count++; e.target.textContent = 'Clicked -' + count; console.log(count);};

    return (<>
        <button className={styles.myButton} onClick={(e)=>handleClient(e)}>Click Me {count}</button>
    </>);
}

export default Button;