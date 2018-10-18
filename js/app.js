const app = new Vue({
    el: "#app",
    data: {
        title: 'Todo List',
        tasks : [ 
            {
                text : "Learn Vue Js",
                finished: false
            },
            {
                text : "Build App",
                finished: false
            },
            {
                text : "Build Todo List",
                finished: false
            }
        ],
        newTask: ''
    },
    methods: {
        addTask:function(){
            let text = this.newTask.trim();
            if(text) {
                this.tasks.push({
                    text:text,
                    finished:false
                });
            }
            this.newTask = "";
        }
    }
})