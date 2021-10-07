const axios = require('axios');

export default {
    namespaced: true,
    state() {
        return {
            equalityDemands: []
        }
    },
    mutations: {
        getEqualityDemand(state, { equalityDemands }) {
            state.equalityDemands = equalityDemands;
        },
        addEqualityDemand(state, { equalityDemand }){
            state.equalityDemands.push(equalityDemand);
        }
    },
    actions: {
        async getEqualityDemand(context) {
            const responseData = await axios.get('https://futurifest2021-wdb-default-rtdb.firebaseio.com/equalityDemand.json');

            if (responseData.status !== 200) {
                const error = new Error(responseData.message || 'Failed to fetch!');
                throw error;
            }

            const equalityDemands = [];

            for (const key in responseData.data) {
                const equalityDemand = {
                    id: key,
                    email: responseData.data[key].email,
                    name: responseData.data[key].name,
                    race: responseData.data[key].race,
                    companyName: responseData.data[key].companyName,
                    position: responseData.data[key].position,
                    companyAddress: responseData.data[key].companyAddress,
                    companyCity: responseData.data[key].companyCity,
                    jobType: responseData.data[key].jobType,
                    yearsOfWork: responseData.data[key].yearsOfWork,
                    salaryFrom: responseData.data[key].salaryFrom,
                    salaryTo: responseData.data[key].salaryTo,
                    maleSalaryFrom: responseData.data[key].maleSalaryFrom,
                    maleSalaryTo: responseData.data[key].maleSalaryTo,
                    description: responseData.data[key].description,
                    companySocmed: responseData.data[key].companySocmed,
                };
                equalityDemands.push(equalityDemand);
            }

            context.commit('getEqualityDemand', {
                equalityDemands: equalityDemands
            });

        },
        async storeEqualityDemand(context, { email, name, race, companyName, position, companyAddress, companyCity, jobType, yearsOfWork, salaryFrom, salaryTo, maleSalaryFrom, maleSalaryTo, description, companySocmed }){
            const equalityDemand = {
                email: email,
                name: name,
                race: race,
                companyName: companyName,
                position: position,
                companyAddress: companyAddress,
                companyCity: companyCity,
                jobType: jobType,
                yearsOfWork: yearsOfWork,
                salaryFrom: salaryFrom,
                salaryTo: salaryTo,
                maleSalaryFrom: maleSalaryFrom,
                maleSalaryTo: maleSalaryTo,
                description: description,
                companySocmed: companySocmed,
            }

            const responseData = await axios.post('https://futurifest2021-wdb-default-rtdb.firebaseio.com/equalityDemand.json', equalityDemand);

            console.log(responseData);

            if (responseData.status !== 200) {
                const error = new Error(responseData.message || 'Failed to store data!');
                throw error;
            }

            context.commit('addEqualityDemand', equalityDemand)

        }
    },
    getters: {
        equalityDemands(state){
            return state.equalityDemands;
        },
        getEqualityDemandById: (state) => (id) => {
            let equalityDemand = state.equalityDemands.filter(ed => ed.id === id)[0];
            return equalityDemand;
        }
    }
}