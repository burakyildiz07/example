import Vue from 'vue';
import router from './router';
import App from './components/App';
import BorderPlaceHolderInput from "./components/common/BorderPlaceHolderInput";

Vue.component('border-place-holder-input', BorderPlaceHolderInput)
require('./bootstrap');


const app = new Vue({
    el: '#app',

    components: {
        App
    },

    router,

});
