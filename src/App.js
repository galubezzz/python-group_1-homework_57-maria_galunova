import React, {Component} from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.modal = false;
    }

    showModal = () => {
        this.setState({modal: true})
    }

    closeModal = () => {
        this.setState({modal: false})
    }

    render() {
        return (
            <div className="App">
                <Modal title="Заголовок модального окна"
                       show={this.state.modal}
                       close={this.closeModal}>Text</Modal>
                <button onClick={this.showModal}>Modal</button>
            </div>
        );
    }
}

export default App;
