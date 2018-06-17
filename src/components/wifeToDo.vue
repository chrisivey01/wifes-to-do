<template>
    <div>
        <div class="container">
            <div>
                <label> Only delete one at a time!</label>
                <div>
                    <label class="sentText">{{textMessage}}</label>
                </div>
            </div>
            <input v-model="item"/>
            <button @click="add">add</button>

            <ul class="list-group"  >
                <li class="list-group-item" v-for="task in todo" :class="{'selected': task.clicked}" :key="task.id" @click="changeColor(task,todo)">
                    {{task.todo}}
                </li>
            </ul>
            <div>
                <button @click="remove">Remove</button>
            </div>
            <div>
                <button @click="refresh">Refresh List</button>
            </div>
            <div>
                <button @click="notify"> Notify Wife</button>
            </div>
        </div>
    </div>
</template>

<script>
    import serviceCaller from '../serviceCaller'
    import refreshList from '../refreshList'
    import sendItems from '../sendItems'
    import deleteItems from '../deleteItems'

    export default {
        name: "wife-to-do",
        data: function () {
            return {
                item: '',
                task:'',
                stuffs: [],
                textMessage: '',
                items: '',

                need: [],
                todo: [],

                clicked:false

            }
        },
        methods: {
            changeColor(task, todo) {

                task.clicked = !task.clicked;
                this.need = [...todo]
                this.todo = [...this.need]
            },
            notify() {

                //sends text msg from server
                serviceCaller.sendText().then(success => {
                    if (success) {
                        this.textMessage = "Message sent to wife!"
                    }
                    else {
                        this.textMessage = "Message failed!"
                    }
                });
            },

            add() {
                this.stuffs.push({item: this.item, clicked: false});
                sendItems.sendItems(this.item)
                this.item = ""
            },

            remove() {
                let getIndex;

                for (let i = 0; i < this.need.length; i++) {
                    if (this.need[i].clicked == true) {
                        getIndex = this.need[i].id;
                        deleteItems.deleteItem(getIndex);
                        delete this.need.splice([i], 1)
                    }
                }
                this.todo = [...this.need]
            },

            refresh() {
                refreshList.refresh().then((data) => {
                    data.json().then((data) => this.todo = data)
                    }
                )
            }
        },
        beforeMount(){
            this.refresh();
        }
    }

</script>

<style scoped>
    .selected{
        background-color: blueviolet;
    }

    .sentText{
        background-color: red;
    }
</style>