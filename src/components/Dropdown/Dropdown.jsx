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
        const { visible } = this.state;

        return (            
            <div className="Dropdown">
                <button type="button" className="Dropdown__toggle" onClick={this.togle}>
                    {visible ? 'Скрыть' : 'Показать'}
                </button>
                {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
                    Скрыть
                </button> */}

                {visible && (
                    <div className="Dropdown__menu">выпадающее меню</div>
                )}
                
            </div>
        )
    }
}

export default Dropdown;    