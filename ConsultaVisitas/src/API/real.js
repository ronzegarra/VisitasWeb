//import store from '../State/store';
//import ActionsCreators from '../State/ActionsCreators';

//const urlBase = require('../../config.json').serverUrlBase;

//const urlBase = require('../../config.json').serverUrlBase;
const urlBase = 'http://10.18.1.92:3000/api/';

export default {
	auth: {
		async registerUser(account, password) {
			console.log(')))))))))))))))))');

			try {
				const result = await fetch(`${urlBase}users`, {
					method: 'POST',
					//mode: 'cors',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						account: account,
						password: password
					})
				});
				const resultJson = result.json();
				if (resultJson.error) {
					return {
						error: true,
						message: 'Ocurrió un error'
					};
				}
				return resultJson;
			} catch (err) {
				console.log(`API.real auth.register error ${JSON.stringify(err)}`);
				return {
					error: true,
					message: 'Disculpa ocurrió un error, intenta más tarde'
				};
			}
		}
	},
	visits: {
		async getVisits() {
			return [
				{
					uid: 1,
					text: 'Minera la piedra verde',
					status: 'verde'
				},
				{
					uid: 2,
					text: 'Minera la piedra negra',
					status: 'naranja'
				},
				{
					uid: 3,
					text: 'Minera la piedra azul',
					status: 'rojo'
				},
				{
					uid: 4,
					text: 'Minera la piedra amarillo',
					status: 'verde'
				},
				{
					uid: 5,
					text: 'Minera la piedra naranja',
					status: 'verde'
				}
			];
		},
		async registerVisit(visit, auth) {
			console.log('¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿');
			console.log(visit);
			console.log(auth);

			//rut, description, interviewerName, optionResultSelected, optionSaleSelected, writeComment

			// crea un usuario nuevo

			try {
				const result = await fetch(`${urlBase}visits`, {
					method: 'POST',
					//mode: 'no-cors',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						rut: visit.rut,
						description: visit.description,
						interviewerName: visit.interviewerName,
						optionResultSelected: visit.optionResultSelected,
						optionSaleSelected: visit.optionSaleSelected,
						writeComment: visit.writeComment,
						user: auth
					})
				});
				const resultJson = await result.json();
				if (resultJson.error) {
					return {
						error: true,
						message: 'Ocurrió un error'
					};
				}
				return resultJson;
			} catch (err) {
				console.log(`API.real auth.register error ${JSON.stringify(err)}`);
				return {
					error: true,
					message: 'Disculpa ocurrió un error, intenta más tarde'
				};
			}
		},

		async searchStartVisit() {
			// se fija si el usuario ya esta registrado
			console.log('/////////////');
			//console.log(searchVisit);

			try {
				//const rootToken = await store.getState().root.token;
				const result = await fetch(`${urlBase}visits`, {
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					}
				});
				const resultJson = await result.json();
				if (resultJson.error) {
					return {
						error: true,
						message: 'Ocurrió un error'
					};
				}
				return resultJson;
			} catch (err) {
				console.log(`API.real auth.isRegister error ${JSON.stringify(err)}`);
				return {
					error: true,
					message: 'Disculpa ocurrió un error, intenta más tarde'
				};
			}
    },
    
    
    async searchVisit(searchVisitData) {
			// se fija si el usuario ya esta registrado
			console.log('??????????????????');
			console.log(searchVisitData);

			try {
        //const rootToken = await store.getState().root.token;
        //searchVisits/${searchVisitData}`
				const result = await fetch(`${urlBase}searchVisit/Filter?searchVisitData=${JSON.stringify(searchVisitData)}`, {
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					}
				});
        const resultJson =  result.json();
        
        console.log('¿¿¿¿¿¿¿¿¿¿¿¿¿¿');
        console.log(resultJson);

				if (resultJson.error) {
					return {
						error: true,
						message: 'Ocurrió un error'
					};
				}
				return resultJson;
			} catch (err) {
				console.log(`API.real auth.isRegister error ${JSON.stringify(err)}`);
				return {
					error: true,
					message: 'Disculpa ocurrió un error, intenta más tarde'
				};
			}
    },
    

	}
};
