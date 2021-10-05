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

            if (!responseData.ok) {
                const error = new Error(responseData.message || 'Failed to fetch!');
                throw error;
            }

            const equalityDemands = [];

            for (const key in responseData) {
                const equalityDemand = {
                    id: key,
                    email: responseData[key].email,
                    name: responseData[key].name,
                    race: responseData[key].race,
                    companyName: responseData[key].companyName,
                    position: responseData[key].position,
                    companyAddress: responseData[key].companyAddress,
                    companyCity: responseData[key].companyCity,
                    jobType: responseData[key].jobType,
                    yearsOfWork: responseData[key].yearsOfWork,
                    salaryFrom: responseData[key].salaryFrom,
                    salaryTo: responseData[key].salaryTo,
                    maleSalaryFrom: responseData[key].maleSalaryFrom,
                    maleSalaryTo: responseData[key].maleSalaryTo,
                    description: responseData[key].description,
                    companySocmed: responseData[key].companySocmed,
                };
                equalityDemands.push(equalityDemand);
            }

            context.commit('getEqualityDemand', equalityDemands);

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
    }
}