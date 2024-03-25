import Footer from "./TestComponents/Footer";
import Header from "./TestComponents/Header";
import Card from "./TestComponents/Card";
import Button from "./Button/Button";
import Greeting from "./Greeting";
import List from "./List";
import Food from "./TestComponents/Food";
import UserRegistration from "./UserRegistration";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";

function App() {
  const fruits = [
    { id: 1, name: "banana", calories: 95 },
    { id: 2, name: "pine-apple", calories: 200 },
    { id: 3, name: "orange", calories: 95 },
  ];

  const vegs = [
    { id: 1, name: "corn", calories: 95 },
    { id: 2, name: "potatoes", calories: 200 },
    { id: 3, name: "tomato", calories: 95 },
  ];

  return (
    <>
      {/* <Header title="title from parent" ></Header>
    
    <Button/>

    <Greeting isLoggedIn={true}></Greeting>
    <Card 
      name="Saravanan" 
      description="I write code and I am a developer"
      experience={38}></Card>
      
    <Card></Card>
    <List items={fruits}></List>
    <List items={vegs}></List>
    <Footer></Footer> */}
      <Food></Food>
      <UserRegistration></UserRegistration>
      <Login></Login>
    </>
  );
}

export default App;
