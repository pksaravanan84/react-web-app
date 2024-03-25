

function List(props) {
   
    const fruitItems = props.items.map(f => <li key={f.id}>{f.name} &nbsp; {f.calories}</li>);
    return(<ul>{fruitItems}</ul>);

}

export default List;