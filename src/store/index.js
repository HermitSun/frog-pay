import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentAmount: 0,
    paymentMethod: ''
  },
  mutations: {
    updatePaymentAmount (state, amount) {
      state.paymentAmount = amount
    },
    updatePaymentMethod (state, method) {
      state.paymentMethod = method
    }
  },
  actions: {
    updatePaymentAmount (context, amount) {
      context.commit('updatePaymentAmount', amount)
    },
    updatePaymentMethod (context, method) {
      context.commit('updatePaymentMethod', method)
    }
  }
})
