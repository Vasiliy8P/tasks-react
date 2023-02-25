import { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
    state = {
        visible: false,
    }

    togle = () => {
        this.setState(() => ({
            visible: !this.state.visible
        })) 
    }

    // show = () => {
    //     this.setState({visible: true})
    // }

    // hide = () => {
    //     this.setState({visible: false})
    // }

    render() {
        return (
            <div className="Dropdown">
                <button type="button" className="Dropdown__toggle" onClick={this.togle}>
                    {this.state.visible ? 'Скрыть' : 'Показать'}
                </button>
                {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
                    Скрыть
                </button> */}

                {this.state.visible && (
                    <div className="Dropdown__menu">выпадающее меню</div>
                )}
                
            </div>
        )
    }
}

export default Dropdown;    