import React from 'react';
// import Radium from 'radium';
import './Car.css';
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass';

class Car extends React.Component {
    
    constructor(props) {
        super(props)

        this.inputRef = React.createRef()
    }
    
    componentDidMount() {
        if(this.props.index === 0) {
            this.inputRef.current.focus()
        }

        
    }
    

    // componentWillReceiveProps(nextProps) {
    //     console.log('Car componentWillReceiveProps', nextProps)
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('Car shouldComponentUpdate', nextProps, nextState)

    //     return nextProps.name.trim() !== this.props.name.trim()
    // }
    
    // componentWillUpdate(nextProps, nextState) {
    //     console.log('Car componentWillUpdate', nextProps, nextState)
    // }

    // // static getDerivedStateFromProps(nextProps, prevState) {
    // //     console.log('Car getDerivedStateFromProps', nextProps, prevState)

    // //     return prevState
    // // }

    // componentDidUpdate() {
    //     console.log('Car componentDidUpdate')
    // }

    // // getSnapshotBeforeUpdate() {
    // //     console.log('Car getSnapshotBeforeUpdate')
    // // }

    // componentWillUnmount() {
    //     console.log('Car componentWillUnmount')
    // }

    render() {
        // console.log('Car render')

        // if (Math.random() > 0.7) {
        //     throw new Error('Car random failed')
        // }

        const inputClasses = ['input']

        if(this.props.name !== '') {
            inputClasses.push('green')
        }else {
            inputClasses.push('red')
        }
        if(this.props.name.length > 4) {
            inputClasses.push('bold')
        }
    
        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input 
                    ref={this.inputRef}
                    type="text" 
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>  
            </React.Fragment>
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


Car.propTypes = {
    name: PropTypes.string.isRequired,
    year:PropTypes.number,
    index:PropTypes.number,
    onDelete:PropTypes.func,
    onChangeName:PropTypes.func
}


export default withClass(Car, Car);