const axios = require('axios');

export default {
    namespaced: true,
    state() {
        return {
            jobs: []
        }
    },
    mutations: {
        getJobs(state, { jobs }) {
            state.jobs = jobs;
        },
        addJob(state, { job }) {
            state.jobs.push(job);
        }
    },
    actions: {
        async getJobs(context) {
            const responseData = await axios.get('https://futurifest2021-wdb-default-rtdb.firebaseio.com/jobs.json');

            if (responseData.status !== 200) {
                const error = new Error(responseData.message || 'Failed to fetch!');
                throw error;
            }

            const jobs = [];

            for (const key in responseData.data) {
                const job = {
                    id: key,
                    position: responseData.data[key].position,
                    companyName: responseData.data[key].companyName,
                    companyCity: responseData.data[key].companyCity,
                    companyWebsite: responseData.data[key].companyWebsite,
                    applyUrl: responseData.data[key].applyUrl,
                    jobType: responseData.data[key].jobType,
                    experienceLevel: responseData.data[key].experienceLevel,
                    role: responseData.data[key].role,
                    jobDesc: responseData.data[key].jobDesc,
                    responsibility: responseData.data[key].responsibility,
                    lookingFor: responseData.data[key].lookingFor,
                    bonusPoint: responseData.data[key].bonusPoint,
                    offering: responseData.data[key].offering,
                    salaryFrom: responseData.data[key].salaryFrom,
                    salaryTo: responseData.data[key].salaryTo,
                    maleSalaryFrom: responseData.data[key].maleSalaryFrom,
                    maleSalaryTo: responseData.data[key].maleSalaryTo,
                };
                jobs.push(job);
            }

            context.commit('getJobs', {
                jobs: jobs
            });

        },
        async storeJobs(context, { position, companyName, companyCity, companyWebsite, applyUrl, jobType, experienceLevel, role, jobDesc, responsibility, lookingFor, bonusPoint, offering, salaryFrom, salaryTo, maleSalaryFrom, maleSalaryTo, }) {
            const job = {
                position: position,
                companyName: companyName,
                companyCity: companyCity,
                companyWebsite: companyWebsite,
                applyUrl: applyUrl,
                jobType: jobType,
                experienceLevel: experienceLevel,
                role: role,
                jobDesc: jobDesc,
                responsibility: responsibility,
                lookingFor: lookingFor,
                bonusPoint: bonusPoint,
                offering: offering,
                salaryFrom: salaryFrom,
                salaryTo: salaryTo,
                maleSalaryFrom: maleSalaryFrom,
                maleSalaryTo: maleSalaryTo,
            }

            const responseData = await axios.post('https://futurifest2021-wdb-default-rtdb.firebaseio.com/jobs.json', job);

            if (responseData.status !== 200) {
                const error = new Error(responseData.message || 'Failed to store data!');
                throw error;
            }

            context.commit('addJob', {
                job: job
            })

        }
    },
    getters: {
        jobs(state) {
            return state.jobs;
        },
        getJobsById: (state) => (id) => {
            let job = state.jobs.filter(job => job.id === id)[0];
            return job;
        }
    }
}