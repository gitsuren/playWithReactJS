import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
// import MainContent from "./components/maincontent/MainContent";
import Footer from "./components/footer/Footer";
import TodoItem from "./components/Todos/TodoItem";
import ContactCardList from "./components/contactcard/ContactCardList";
// import Joke from "./components/joke/Joke";
import JokeList from "./components/joke/JokeList";
import ProductList from "./components/product/ProductList";
import TodoItemList from "./components/Todos/TodoItemList";
import Login from "./components/login/Login";
import EventsInReact from "./components/eventsInReact/EventsInReact";
import ApiFetch from "./components/apifetch/ApiFetch";
import Form from "./components/forms/Form";
import FormContainer from "./components/forms/FormContainer";
import MemeHeader from "./components/meme/MemeHeader";
import MemeGenerator from "./components/meme/MemeGenerator";

function App() {
    return (
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload - HELLO WORLD!!!.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
        <div className="todo-list">
            <Header/>
            <Login/>
            {/*<MainContent/>*/}
            <TodoItemList/>
            <Footer/>

            <ContactCardList/>

            <JokeList/>

            <ProductList/>

            <EventsInReact/>

            <ApiFetch/>

            {/*this is before we moved form to its own container and component<Form/>*/}
            <FormContainer/>

            <MemeHeader/>
            <MemeGenerator/>

        </div>
    );
}

export default App;
