import { Component } from 'react'; 
import {Controls} from 'components/Counter/Controls'
 
class Counter extends Component { 
    static defaultProps = { 
        initialValue: 0, 
    } 
 
    staticProps = { 
        /// 
    } 
 
    state = { 
        value: this.props.initialValue, 
    } 
 
    handleIncrement = () => { 
        this.setState(prevState => ({ 
            value: prevState.value + 1, 
        })); 
    } 
 
    handleDecrement = () => { 
        this.setState(prevState => ({ 
            value: prevState.value - 1, 
        }))  
    } 
 
    render() { 
        return ( 
            <div> 
                <span>{this.state.value}</span> 
                <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
            </div> 
        ) 
    } 
} 
 
export default Counter;