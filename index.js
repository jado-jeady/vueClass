const Main= Vue.createApp({
    data(){
        return {
            age: 45,
            name:"jado",
            Books: ["Heart that want","name that is never known","beneath Kings rules"]
        }

    },
    methods: {
        layUp(age){    
            if(this.age > 20){
                this.name=age
                this.age=19
                console.log(this.age)
            }
        

    }
}
})


Main.mount("#Main")