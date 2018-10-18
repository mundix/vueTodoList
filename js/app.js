Vue.component('titulo',{
    template: '<h2>{{titulo}}</h2>',
    data: function() {
        return { titulo: 'Todo List'}
    }
});
const app = new Vue({ 
    el: "#app",
    data: {
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
        },
        deleteTask:function(index) {
            this.tasks.splice(index,1);
        }
    }
})