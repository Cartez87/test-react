import React from 'react';
// import Radium from 'radium';
import './Car.css';

class Car extends React.Component {

    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate', nextProps, nextState)

        return nextProps.name.trim() !== this.props.name.trim()
    }
    
    componentWillUpdate(nextProps, nextState) {
        console.log('Car componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate() {
        console.log('Car componentDidUpdate')
    }

    render() {
        console.log('Car render')
        const inputClasses = ['input']

        if(this.props.name !== '') {
            inputClasses.push('green')
        }else {
            inputClasses.push('red')
        }
    
        if(this.props.name.length > 4) {
            inputClasses.push('bold')
        }
    
        const style = {
            border: '1px solid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            cursor: 'pointer',
            ':hover': {
                borderColor: '#aaa',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)'
            }
        }
    
        return (
            <div className='Car' style={style}>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input 
                    type="text" 
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>  
            </div>
        )
    }
}

// function car() {
//     return(
//         <h2>This is car components</h2>
//     )
// }

// const car = () => {
//     return (
//         <h2>This is car components</h2>
//     )
// }

// const car = () => (
//     <h2>This is car components
//         <mark>test</mark>
//     </h2>
// )


export default Car;