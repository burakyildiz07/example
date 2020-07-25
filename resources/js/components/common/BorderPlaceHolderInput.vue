<template>
    <div class="group d-flex">
        <label  v-bind:class="{  'required': isRequired }">
                {{label}}
        </label>
        <div v-if="options.inputFileImage" class="input-file-icon"  @click="$refs.file.click()">
            <img :src="'img/'+options.inputFileImage" class="embed-responsive" alt="">
        </div>

        <input
                v-show="showInput"
               :type="options.inputType"
               v-model="inputValue"
               @input="updateModel"
                ref="file"
               :disabled="options.disableInput?options.disableInput:false"
               v-bind:style="options.borderColor ? { border: '2px solid'+options.borderColor}:''"


        >
        <i v-if="icon" :class="icon + ' input-icon'"
           v-bind:style="{ cursor: cursor }"></i>
    </div>
</template>

<script>
    export default {
        props: {
            value:'',
            label:'',
            icon:false,
            isRequired:false,
            options: {
                default: function () {
                    return {
                        iconCursorEnabled:false,
                        disableInput:false,
                        borderColor:false,
                        inputType:'text',
                        inputFileImage:false
                    }
                }
            },
        },
        name: "BorderPlaceHolderInput",
        data:function(){
            return {
                inputValue:'',
                cursor:'none',
                showInput:true,
            }
        },

        beforeMount() {

        },
        mounted(){
            this.inputValue= this.value;
            if(this.options.iconCursorEnabled){
                this.cursor='pointer';
            }
            if(this.options.inputFileImage){
                this.showInput=false;
            }
        },
        methods:{
            updateModel(){
                this.$emit('input', this.inputValue)
            }
        }
    }
</script>

<style scoped>
    .group{
        width: 100%;
        position:relative;
    }
    .group label{
        color:#1c2f50;
    }
    .group>label{
        padding:0 0.2em;
        position:absolute;
        top:-0.5em;
        left:1.5em;
        background-color:white;
        font-weight: bold;
        font-size: 10px;
    }
    .group>input,.group>.input-file-icon{
        padding:0.8em;
        border-radius: 0.5em;
        border: 2px solid #818da4;
        outline:none;
        width: 100%;
        color:#1c2f50;
        font-weight: 600;
    }
    .group>input:focus,.group>.input-file-icon:focus{
        padding:0.8em;
        border-radius: 0.5em;
        border: 2px solid #abeedb;
        outline:none;
        width: 100%;
    }
    .input-icon{
        position: absolute;
        right: 12px;
        top: 17px;
    }
    input:disabled {
        background: none!important;
    }
    .required:before {
        content:"*";
        color: red;
    }
    .input-file-icon{
        cursor: pointer;
        width: 100%;
        text-align: center;
        padding: 1.5rem!important;
        border-radius: 0.1em!important;
    }



</style>
