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

// Instancia
let task = new Vue({
    el: '#app',
    data: {
        new_task: '',
        draft: '',
        tasks: [
            {
                description: 'Aprender Foundation',
                pending: true,
                editing: false
            },
            {
                description: 'Aprender Angular',
                pending: true,
                editing: false
            },
            {
                description: 'Aprender Gulp',
                pending: false,
                editing: false
            },
            {
                description: 'Aprender Vue',
                pending: false,
                editing: false
            }
        ]
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
        toggleStatus: function( task ) {
            task .pending = !task .pending;
        },
        editTask( task ) {
            // Evita que pueda editar multiples tareas
            this .tasks .forEach( ( task ) => {
                task .editing = false;
            });

            this .draft = task .description;   // Crea Borrador de la tarea
            task .editing = true;
        },
        updateTask( task ) {
            task .description = this .draft;   // Actualiza la descripción de la tarea
            task .editing = false;
        },
        discardTask( task ) {
            task .editing = false;
        },
        deleteTask( index ) {
            this .tasks .splice( index, 1 );
        },
        deleteTasksCompleted() {
            this .tasks = this .tasks .filter( ( task ) => {
                return task .pending;
            });
        }
    }
});
