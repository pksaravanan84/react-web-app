import {useState} from 'react'

function Food() {
    
    const [name, setName] = useState();


    const food1 = "Mutton curry";
    const food2 = "Chicken curry";

    return (
        <ul>
            <li>Veg Biriyani</li>
            <li>{food1}</li>
            <li>{food2}</li>
        </ul>
    ) ;


}
export default Food;