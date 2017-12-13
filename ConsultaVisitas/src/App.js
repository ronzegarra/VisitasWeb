import React, { Component } from 'react';
//import logo from './logo.svg';
//import Input from './Input';
//import Button from './Button';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { PieChart } from 'react-easy-chart';
import { BarChart } from 'react-easy-chart';
import { Legend } from 'react-easy-chart';

import './App.css';

import API from './API';

class App extends Component {
	//let visits=[];
	constructor(props) {
		super(props);
		this.loadVisits = this.loadVisits.bind(this);
		this.state = {
			visits: [],
			user: '',
			rut: '',
			description: '',
			optionResultSelected: '',
			optionSaleSelected: '',
			startDate: null,
			//endDate: moment(),

			countYes: 0,
			countNo: 0,

			countPositive: 0,
			countNeutral: 0,
			countNegative: 0
		};
		//handleUser(event) {
		this.handleUser = this.handleUser.bind(this);
		this.handleRUT = this.handleRUT.bind(this);
		this.handleDescription = this.handleDescription.bind(this);
		this.handleChangeResult = this.handleChangeResult.bind(this);

		this.handleChangeSale = this.handleChangeSale.bind(this);
		this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
		//this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	async componentWillMount() {
		console.log('+++++++++++');
		this.loadVisits();
	}

	loadVisits = async () => {
		let countYes = 0;
		let countNo = 0;
		let countPositive = 0;
		let countNeutral = 0;
		let countNegative = 0;

		const visits = await API().visits.searchStartVisit();

		this.setState({ visits: visits });
		console.log('///////////////');
		console.log(this.state.visits);

		visits.map(function(x) {
			//return x * 2;
			if (x.optionSaleSelected === 'Si') {
				countYes = countYes + 1;
			}
			if (x.optionSaleSelected === 'No') {
				countNo = countNo + 1;
			}
		});

		visits.map(function(x) {
			//return x * 2;
			if (x.optionResultSelected === 'Positivo') {
				countPositive = countPositive + 1;
			}
			if (x.optionResultSelected === 'Neutral') {
				countNeutral = countNeutral + 1;
			}
			if (x.optionResultSelected === 'Negativo') {
				countNegative = countNegative + 1;
			}
		});

		//console.log(countYes);
		this.setState({ countYes: countYes });
		this.setState({ countNo: countNo });

		this.setState({ countPositive: countPositive });
		this.setState({ countNeutral: countNeutral });
		this.setState({ countNegative: countNegative });
	};

	handleUser(event) {
		this.setState({ user: event.target.value });
	}

	handleRUT(event) {
		this.setState({ rut: event.target.value });
	}

	handleDescription(event) {
		this.setState({ description: event.target.value });
	}

	handleChangeResult(event) {
		this.setState({ optionResultSelected: event.target.value });
	}

	handleChangeSale(event) {
		this.setState({ optionSaleSelected: event.target.value });
	}

	handleChangeStartDate(date) {
		console.log('++++++++++++++');
		console.log(date);

		this.setState({
			startDate: date
		});
		moment.unix(this.state.startDate / 1000).format('DD/MM/YYYY');
	}

	/*
	handleChangeEndDate(date) {
		this.setState({
			endDate: date
		});
		let startDate = moment.unix(this.state.startDate / 1000).format('DD/MM/YYYY');
  }
  */

	searchButton = () => {
		console.log('??????????');
		console.log(this.state);
	};

	submitForm = async e => {
		console.log('***********');
		e.preventDefault();

		let countYes = 0;
		let countNo = 0;

		let countPositive = 0;
		let countNeutral = 0;
		let countNegative = 0;

		let searchVisitData = {};
		searchVisitData['user'] = this.state.user;
		searchVisitData['rut'] = this.state.rut;
		searchVisitData['description'] = this.state.description;
		searchVisitData['optionResultSelected'] = this.state.optionResultSelected;
		searchVisitData['optionSaleSelected'] = this.state.optionSaleSelected;
		searchVisitData['startDate'] = moment.unix(this.state.startDate / 1000).format('DD/MM/YYYY');

		//pendingOperationsData['Importe'] = this

		console.log(searchVisitData);
		//console.log(JSON.stringify(searchVisitData))

		const visits2 = await API().visits.searchVisit(searchVisitData);

		console.log('/////////////////////////////////');
		console.log(visits2);
		this.setState({ visits: visits2 });

		/*if(visits2.optionSaleSelected == 'Si'){
      countYes = count+1;
      console.log()
      this.setState({countYes: countYes});
    }
    */

		//visits.map(value => value[1] + 1);

		visits2.map(function(x) {
			//return x * 2;
			if (x.optionSaleSelected === 'Si') {
				countYes = countYes + 1;
			}
			if (x.optionSaleSelected === 'No') {
				countNo = countNo + 1;
			}
		});

		visits2.map(function(x) {
			//return x * 2;
			if (x.optionResultSelected === 'Positivo') {
				countPositive = countPositive + 1;
			}
			if (x.optionResultSelected === 'Neutral') {
				countNeutral = countNeutral + 1;
			}
			if (x.optionResultSelected === 'Negativo') {
				countNegative = countNegative + 1;
			}
		});

		//console.log(countYes);
		this.setState({ countYes: countYes });
		this.setState({ countNo: countNo });

		this.setState({ countPositive: countPositive });
		this.setState({ countNeutral: countNeutral });
		this.setState({ countNegative: countNegative });

		console.log(this.state.countYes);

		/* const visits222 = await API().visits.searchVisits(JSON.stringify(searchVisitData));

    console.log('/////////////////////////////////');
    console.log(visits222);
    */

		//this.loadVisits();
	};

	/* handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  */

	render() {
		let visistSelected = this.state.visits;

		{
			/*
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
    */
		}

		const pieData = [
			{
				key: 'SI ' + '(' + this.state.countYes + ')',
				value: this.state.countYes,
				color: '#FF7F0E'
			},
			{
				key: 'NO ' + '(' + this.state.countNo + ')',
				value: this.state.countNo,
				color: '#1F77B4'
			}
		];

		const configpieDataColor = [{ color: '#FF7F0E' }, { color: '#1F77B4' }];

		const barCharData = [
			{
				x: 'Positivo',
				y: this.state.countPositive,
				color: '#00AB40'
			},
			{
				x: 'Neutral',
				y: this.state.countNeutral,
				color: '#FFC60B'
			},
			{
				x: 'Negativo',
				y: this.state.countNegative,
				color: '#FF2938'
			}
		];

		/*const configbarCharDataColor = [
      {color: '#00AB40'},
      {color: '#FFC60B'},
      {color: '#FF2938'}
    ]
    */

		return (
			<div className="App">
				<header className="App-header">
					{/*<img className="App-logo" alt="logo" />*/}
					<h1 className="App-title">Consulta de Resultados Bantotal Visitas</h1>
				</header>
				<div>
					<form onSubmit={this.submitForm}>
						<div style={{ backgroundColor: '#3E2C42', color: 'black' }}>
							<div className={'form-group pendingOperation--search-form l-center'}>
								<label style={{ marginLeft: 15, marginRight: 5, color: 'white' }}>Usuario: </label>

								<input
									style={{ width: 100, borderRadius: 4 }}
									placeholder="Usuario"
									value={this.state.user}
									onChange={this.handleUser}
								/>

								<label style={{ marginLeft: 15, marginRight: 5, color: 'white' }}>RUT: </label>
								<input
									style={{ width: 120, borderRadius: 4 }}
									placeholder="RUT"
									value={this.state.rut}
									onChange={this.handleRUT}
								/>
								<label style={{ marginLeft: 15, marginRight: 5, color: 'white' }}>Descripción: </label>
								<input
									style={{ width: 120, borderRadius: 4 }}
									placeholder="Descripción"
									value={this.state.description}
									onChange={this.handleDescription}
								/>
								<label style={{ marginLeft: 15, marginRight: 5, color: 'white' }}>Resultado: </label>
								<select
									style={{ width: 120, borderRadius: 4 }}
									value={this.state.optionResultSelected}
									onChange={this.handleChangeResult}
								>
									<option value="">Selecciona</option>
									<option value="Positivo">Positivo</option>
									<option value="Neutral">Neutral</option>
									<option value="Negativo">Negativo</option>
								</select>
								<label style={{ marginLeft: 15, marginRight: 5, color: 'white' }}>Vendió: </label>
								<select
									style={{ width: 120, borderRadius: 4 }}
									value={this.state.optionSaleSelected}
									onChange={this.handleChangeSale}
								>
									<option value="">Selecciona</option>
									<option value="Si">Si</option>
									<option value="No">No</option>
								</select>
								<label style={{ marginLeft: 15, marginRight: 5, color: 'white' }}>Fecha: </label>

								<DatePicker
									selected={this.state.startDate}
									onChange={this.handleChangeStartDate}
									dateFormat="DD/MM/YYYY"
								/>

								<button
									type="submit"
									style={{
										color: 'white',
										backgroundColor: '#00437a',
										marginLeft: 60,
										borderRadius: 5,
										borderColor: '#00437a',
										width: 100
									}}
									onClick={this.onSubmit}
								>
									BUSCAR
								</button>
							</div>
						</div>
					</form>

					{this.state.visits.length === 0 ? (
						<div>
							<label> No se encontraron visitas </label>
						</div>
					) : (
						<div>
							<div className="tableContainer">
								<table className="searchTable">
									<thead>
										<tr className="searchTable--header">
											<th>User</th>
											<th>RUT</th>
											<th>Descripción</th>
											<th>Resultado</th>
											<th>Venta</th>
											<th>Fecha</th>
											<th>Hora</th>
											<th>Comentario</th>
										</tr>
									</thead>
									<tbody>
										{visistSelected.map((column, index) => {
											return (
												<tr key={index} className="searchTable--row">
													<td>{column.user.user}</td>
													<td>{column.rut}</td>
													<td>{column.description}</td>
													<td>{column.optionResultSelected}</td>
													<td>{column.optionSaleSelected}</td>
													<td>{column.user.date}</td>
													<td>{column.user.hour}</td>
													<td>{column.writeComment}</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
							<div style={{ backgroundColor: '#E6E6E8', paddingTop: 20, paddingBottom: 20 }}>
								<div style={{ display: 'inline-flex' }}>
									{/*
                <div>
									<label>Resultados de Ventas</label>
									<PieChart
										labels
										data={pieData}
										styles={{
											'.chart_text': {
												fontSize: '1em',
												fill: '#fff'
											}
										}}
									/>

									<Legend data={pieData} dataId={'key'} config={configpieDataColor} horizontal />
                </div>
                  */}
									<div
										style={{
											backgroundColor: 'white',
											paddingBottom: 20,
											marginRight: 10,
											borderTopLeftRadius: 8,
											borderTopRightRadius: 8,
											borderBottomLeftRadius: 8,
											borderBottomRightRadius: 8
										}}
									>
										<label style={{ paddingTop: 20 }}>Resultados de Visita</label>
										<BarChart
											axes
											axisLabels={{ x: 'Tipo de Resultados', y: 'Cantidad de Visitas' }}
											yAxisOrientLeft
											height={400}
											width={650}
											margin={{ top: 50, right: 100, bottom: 50, left: 100 }}
											barWidth={40}
											data={barCharData}
										/>
										{/*<Legend data={barCharData} dataId={'key'} config={configbarCharDataColor} horizontal />*/}
									</div>
									<div
										style={{
											backgroundColor: 'white',
											paddingBottom: 20,
											marginLeft: 10,
											paddingLeft: 20,
											paddingRight: 20,
											borderTopLeftRadius: 8,
											borderTopRightRadius: 8,
											borderBottomLeftRadius: 8,
											borderBottomRightRadius: 8
										}}
									>
										<label style={{ paddingTop: 20 }}>Resultados de Ventas</label>
										<PieChart labels size={400} innerHoleSize={200} data={pieData} />
										<Legend data={pieData} dataId={'key'} config={configpieDataColor} horizontal />
									</div>
								</div>
							</div>
						</div>
					)}
				</div>

				{/*<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
        </p>
              */}
			</div>
		);
	}
}

export default App;
