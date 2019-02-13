import React, {Component} from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.modal = false;
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

    continue = () => {
        alert("You decided to continue.");
    }

    render() {
        return (
            <div className="App">
                <Modal title="Beautiful title"
                       buttons = {this.state.buttons}
                       show={this.state.modal}
                       close={this.closeModal}>Text</Modal>
                <button onClick={this.showModal}>Modal</button>
            </div>
        );
    }
}

export default App;
