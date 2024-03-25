function Greeting(props){

    if(props.isLoggedIn) {
        return (
            <h1>Welcome User</h1>
        );
    }else 
    {
        return (
            <h1>Please Login!</h1>
        );
    }

}

export default Greeting;