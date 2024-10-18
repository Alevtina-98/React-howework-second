import React from "react";
import "./App.css";
function App() {
  // function snowName() {
  //   return "My name Alina";
  // }
  // function onHandleClick() {
  //   console.log("click");
  // }

  // const users = [
  //   {
  //     name: "Alica",
  //     email: "example.com",
  //     number: "123456789",
  //   },
  //   {
  //     name: "Alex",
  //     email: "example123.com",
  //     number: "67888890",
  //   },
  //   {
  //     name: "John",
  //     email: "example567.com",
  //     number: "090890070",
  //   },
  // ];
  // const styles = {
  //   styleForP: {
  //     color: "black",
  //   },

  // };
  // const styles = "p-color";

  // let x = 1;
  // return (
  //   // <>
  //   //   <h1>Hello React</h1>
  //   //   <h2>{snowName()}</h2>
  //   //   <button onClick={onHandleClick}>Click me</button>
  //   // </>
  //   // <>
  //   //   <ul>
  //   //     {users.map((user, index) => (
  //   //       <li key={index}>
  //   //         {user.name}
  //   //         {user.email}
  //   //         {user.number}
  //   //       </li>
  //   //     ))}
  //   //   </ul>
  //   // </>

  //   // <>
  //   //   <p style={{ color: "blue", border: "2px solid red" }}>
  //   //     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae,
  //   //     ratione.
  //   //   </p>
  //   //   <p className="p-color">Lorem ipsum dolor sit.</p>
  //   // </>

  // );
  const elementTitle = React.createElement(
    "h1",
    { className: "title" },
    "Hello world!"
  );
  const elementParagraph = React.createElement(
    "p",
    { className: "paragraph " },
    "Lorem ipsum dolor sit."
  );
  const elementImg = React.createElement("img", {
    className: "img",
    src: "../src/assets/flowers.jpg",
    alt: "flower",
  });

  const onChangeHandler = (e) => {
    const pattern = /^[A-Z]/;
    if (!pattern.test(e.target.value)) {
      console.warn("Введіть ім'я з великої букви");
    } else {
      console.log(e.target.value);
    }
  };

  return (
    // <div className="app">
    //   {x === 0 ? <h2>Hello React</h2> : <h1>Lorem, ipsum.</h1>}
    // </div>
    <>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" onChange={onChangeHandler} />
      </form>

      <div>{elementTitle}</div>
      <div>{elementParagraph}</div>
      <div>{elementImg}</div>
    </>
  );
}

export default App;
