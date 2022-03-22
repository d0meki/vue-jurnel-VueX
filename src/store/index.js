import { createStore } from 'vuex'

// Create a new store instance.

import journal from '@/modules/daybook/store/journal'
const store = createStore({

    modules:{
        journal
    }
    

})

export default store