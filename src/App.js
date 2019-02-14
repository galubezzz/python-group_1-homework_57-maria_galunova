import React, {Component} from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import Alert from "./components/UI/Alert/Alert"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.modal = false;
        this.state.showAlert = false;
        this.state.buttons = [
                {type: 'primary', label: 'Continue', clicked: this.continue},
                {type: 'danger', label: 'Close', clicked: this.closeModal}
        ];
    }

    showModal = () => {
        this.setState({modal: true})
    }

    closeModal = () => {
        this.setState({modal: false})
    }

    showAlert = () => {
        this.setState({showAlert: true})
    }

    closeAlert = () => {
        this.setState({showAlert: false})
    }

    continue = () => {
        alert("You decided to continue.");
    }

    render() {
        return (
            <div className="App">
                <Modal title="Beautiful title"
                       text="Not so beautiful text"
                       buttons = {this.state.buttons}
                       show={this.state.modal}
                       close={this.closeModal}>Text</Modal>
                <Alert show={this.state.showAlert}
                       close={this.closeAlert}
                       closeType={true}
                       timer={0}
                       type="warning">Bla-bla-bla</Alert>
                <button type="button" className='btn btn-primary m-2' onClick={this.showModal}>Modal</button>
                <button type="button" className='btn btn-warning m-2' onClick={this.showAlert}>Alert</button>
            </div>
        );
    }
}

export default App;
