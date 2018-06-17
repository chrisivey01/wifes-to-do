<template>
    <div>
        <div class="container">
            <div >
                <label class="yay" v-if="go == false">
                Be happy, hug a scruff, you got a husband who rocks!! :D
                </label>
                <label class="no" v-else="go == true">
                    Keep up the good moods :D!
                </label>
            </div>

            <br/>
            <div class="red-circle"  :class="{'green-circle': go}" @click="change"></div>
        </div>
    </div>
</template>

<script>
    import moodLevel from '../moodLevel'
    import getMood from '../getMood'

    export default {
        name: "boxes",

        data() {
            return {
                go:false
            }
        },
        methods: {

            change(){
                this.go = !this.go
                moodLevel.saveColor(this.go)
            }
        },
        beforeMount(){
            getMood.refresh().then(response => response.json())
                .then((mood) => {
                    let last = mood.pop()
                    if(last.mood == 1){
                        this.go = true;
                    }else{
                        this.go = false;
                    }
                });
        }
    }

</script>

<style scoped>
    .container{

    }
    .yay{
        color:deeppink
    }

    td{
        border: black;
        border-style: solid;
    }

    .red-circle {
        background-color: red;
        height: 150px;
        -moz-border-radius:75px;
        -webkit-border-radius: 75px;
        width: 150px;
        left:35%;
        position:fixed;
    }

    .green-circle {
        background-color: green;
        height: 150px;
        -moz-border-radius:75px;
        -webkit-border-radius: 75px;
        width: 150px;
        left:35%;
        position:fixed;
    }
</style>