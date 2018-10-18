var data = {
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
}


Vue.component('titulo',{
    template: '<h2>{{titulo}}</h2>',
    data: function() {
        return { titulo: 'Todo List title'}
    }
});

Vue.component('nueva-tarea',{
    template: `<div class="input-group">
                    <input type="text" placeholder="Enter New Task" v-model="newTask" class="form-control" v-on:keyup.enter="addTask()">
                    <span class="input-group-btn">
                        <button v-on:click="addTask()" class="btn btn-xs btn-primary" >Add</button>
                    </span>
                </div>`,
    data:function() {
        return data;
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
Vue.component('lista-de-tarea',{
    template: `<ul class="list-group">
                <li v-for="(task, index) of tasks" class="list-group-item"  v-bind:class="{finished: task.finished}">
                    {{task.text}}
                    <span class="float-right">
                        <button type="button" class="btn btn-success" v-show="!task.finished"  v-on:click="task.finished = !task.finished">
                                <i class="fas fa-check"></i>
                        </button>

                        <button type="button" class="btn btn-danger" v-show="!task.finished" v-on:click="deleteTask(index)">
                                <i class="fas fa-trash-alt"></i>
                        </button>
                    </span>
                </li>
            </ul>`,
    data:function(){
        return data;
    },
    methods:{
        deleteTask:function(index) {
            this.tasks.splice(index,1);
        }
    }
});


const app = new Vue({ 
    el: "#app",
    data:data, // Asigno la var data de inicio de este archivo
    methods: {
        
        
    }
})