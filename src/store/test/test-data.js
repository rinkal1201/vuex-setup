import axios from 'axios'
const state = { 
    tests: []
};
const getters = { 
    testsList: state => state.tests
};
const actions = { 
    async fetchTests({commit}){
      const response = await axios.get("https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json");
      commit("setTests", response.data)
    },
};
const mutations = { 
    setTests: (state, tests) => (
        state.tests = tests
    ),
};
export default {
    state,
    getters,
    actions,
    mutations
}