<template>
    <div>
        <div>
            <label>{{textMessage}}</label>
        </div>
        <input v-model="item"/>
        <button @click="add">add</button>

        <ul id="example">
            <li v-for="stuff in stuffs" :class="{'selected': stuff.clicked}" @click="changeColor(stuff)">
                {{stuff.item}}
            </li>
        </ul>

        <button @click="remove">remove</button>
    </div>
</template>

<script>
    import serviceCaller from '../serviceCaller'
    export default {
        name: "wife-to-do",
        data: function() {
            return {
                item:'',
                stuffs: [],
                textMessage:''
            }
        },
        methods: {
            changeColor(stuff) {
                stuff.clicked = !stuff.clicked;
            },
            add() {

                this.stuffs.push({item: this.item, clicked: false});

                serviceCaller.sendText().then(success =>{
                    if(success){
                        this.textMessage = "Message sent to wife!"
                    }
                    else{
                        this.textMessage = "Message failed!"
                    }
                });
            },

            remove(){
                for(let i= 0; i<this.stuffs.length; i++){
                    if(this.stuffs[i].clicked == true){
                        delete this.stuffs.splice([i],1)
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .selected{
        background-color: blueviolet;
    }
</style>