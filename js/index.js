// Code Vue
// Define Componente Global
Vue .component( 'app-icon', {
    template: '<i class="material-icons">{{ typeIcon }}</i>',
    props: [ 'type' ],
    computed: {
        typeIcon() {
            return this .type;
        }
    }
});
Vue .component( 'app-task', {
    data: {

    },
    template: '#task-template',
    props: [ 'tasks', 'task', 'index' ],     // tasks, task e index están disponibles dentro del componente (por lo que podemos hacer referencia a task usando this)
    methods: {
        edit() {
            // Evita que pueda editar multiples tareas
            this .tasks .forEach( () => {
                this .task .editing = false;
            });

            this .draft = this .task .description;   // Crea Borrador de la tarea
            this .task .editing = true;
        },
        toggleStatus() {
            this .task .pending = !this .task .pending;
        },
        update() {
            this .task .description = this .draft;   // Actualiza la descripción de la tarea
            this .task .editing = false;
        },
        discard() {
            this .task .editing = false;
        },
        remove() {
            this .tasks .splice( this .index, 1 );
        }
    }
});
// Instancia
let task = new Vue({
    el: '#app',
    data: {
        new_task: '',
        draft: '',
        tasks: [
            {
                description: 'Aprender Foundation',
                pending: true
            },
            {
                description: 'Aprender Angular',
                pending: true
            },
            {
                description: 'Aprender Gulp',
                pending: false
            },
            {
                description: 'Aprender Vue',
                pending: false
            }
        ]
    },
    /* Practica no recomendada */
    created() {
        this .tasks .forEach( ( task ) => {
            // task .editing = false;               // Crea la propiedad editting para todas las tareas (SIN getters & setters como una propiedad nativa del objeto 'task')
            this .$set( task, 'editing', false );   // Crea la propiedad editting para todas las tareas (CON getters & setters como una propiedad nativa del objeto 'task')
        });
    },
    methods: {
        createTask() {
            this .tasks .push({
                description: this .new_task,
                pending: true,
                editing: false
            });
            this .new_task = '';
        },
        deleteTasksCompleted() {
            this .tasks = this .tasks .filter( ( task ) => {
                return task .pending;
            });
        }
    }
});
