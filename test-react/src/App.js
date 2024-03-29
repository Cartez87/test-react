import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

class App extends Component{

	constructor(props) {
		super(props)

		this.state =  {
			cars: [
				{name: 'Ford', year: 2018},
				{name: 'Audi', year: 2016},
				{name: 'Mazda', year: 2010}
			],
			pageTitle: 'React Components',
			showCars: false
		}
	}

	
	// changeHandleInput = (event) => {
	// 	this.setState({
	// 		pageTitle: event.target.value
	// 	})
	// }

	// changeTitleHandler = (newTitle) => {
	// 	this.setState({
	// 		pageTitle: newTitle
	// 	})
	// }

	deleteHandler(index){
		const cars = this.state.cars.concat()
		cars.splice(index, 1)
		this.setState({
			cars
		})
	}

	onChangeName = (name, index) => {
		
		const car = this.state.cars[index]
		car.name = name;
		const cars = [...this.state.cars]
		cars[index] = car
		this.setState({
			cars
		})
	}

	toogleCarsHandler = () => {
		this.setState({
			showCars: !this.state.showCars
		})
	}

	componentWillMount() {
		console.log('App componentWillMount')
	}

	componentDidMount() {
		console.log('App componentDidMount')
	}

	render() {
		console.log('App render')
		const divStyle = {
			textAlign: 'center'
		}

		let cars = null
		if (this.state.showCars ) {
			cars = this.state.cars.map((car, index) => {
				return (
					<ErrorBoundary key={index}>
						<Car 
							name={car.name}
							year={car.year}
							index={index}
							onDelete={this.deleteHandler.bind(this, index)}
							onChangeName={event => (this.onChangeName(event.target.value, index))}
						/>
					</ErrorBoundary>
				)
			})
		}

		return (
		<div style={divStyle}>
			{/*<h1>{this.state.pageTitle}</h1>*/}
			<h1>{this.props.title}</h1>

			<Counter />

			<hr/>
			<button 
				style={{marginTop: '15px'}}
				onClick={this.toogleCarsHandler}>Toogle Cars
			</button>
			<div style={{
				width: '400',
				margin: 'auto',
				paddingTop: '20'
			}}>
				{	
					cars
				}
			</div>
			{/* <Car 
				name={cars[0].name} 
				year={cars[0].year}
				onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
			/>
			<Car
				name={cars[1].name}
				year={cars[1].year}
				onChangeTitle={() => this.changeTitleHandler((this, cars[1].name)}
			/>
			<Car
				name={cars[2].name}
				year={cars[2].year}
				onChangeTitle={() => this.changeTitleHandler((this, cars[2].name)}
			/> */}
		</div>
		);
	}
}

export default App;
