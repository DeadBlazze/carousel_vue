import {createStore} from 'vuex'

const store = createStore({
    state () {
      return {
        popupShow: 1
      }
    }
})
export default store;