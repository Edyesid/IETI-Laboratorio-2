import React, {Component} from 'react';
import logo from './logo.svg';
import {TodoApp} from './components/TodoApp';
import {Login} from './components/Login';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

class App extends Component {
    constructor(props) {
        super(props);

        if(localStorage.getItem("isLoggedIn")) {
            this.state = {isLoggedIn:true};
            console.log("entro1");
        } else {
            this.state = {isLoggedIn:false};
            console.log("entro2");
        }
        localStorage.clear();
        localStorage.setItem("username","edwin@gmail.com");
        localStorage.setItem("password", "prueba123");
        this.log = this.log.bind(this);
    }
    render() {
        const LoginView = () => (
            <Login correct={
                this.log}/>
        );
        const TodoAppView = () => (
            <TodoApp/>
        );
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        {!this.state.isLoggedIn && <li><Link to="/">Login</Link></li>}
                        {this.state.isLoggedIn && <li><Link to="/todo">Todo</Link></li>}
                    </ul>

                    <div>
                        {!this.state.isLoggedIn && <Route exact path="/" component={LoginView}/>}
                        {this.state.isLoggedIn && <Route path="/todo" component={TodoAppView}/>}
                    </div>
                </div>
            </Router>
        );
    }

    log(e) {
        this.setState({isLoggedIn:true});
        localStorage.setItem("isLoggedIn", true);
    }

}
export default App;