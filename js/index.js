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
    data: function() {              // Definición de la data (propiedades) de un componente unicamente
        return {
            editing: false,
            draft: ''
        };
    },
    template: '#task-template',
    props: [ 'task', 'index' ],     // task e index están disponibles dentro del componente (por lo que podemos hacer referencia a task usando this)
    methods: {
        edit() {
            // Evita que pueda editar multiples tareas
            // FIXME:  this .editing ya no hace parte de la propiedad (he quitado 'task' como parámetro del callback y funciona)
            this .$parent .tasks .forEach( () => {
                this .editing = false;
            });

            this .draft = this .task .description;   // Crea Borrador de la tarea
            this .editing = true;
        },
        toggleStatus() {
            this .task .pending = !this .task .pending;
        },
        update() {
            this .task .description = this .draft;   // Actualiza la descripción de la tarea
            this .editing = false;
        },
        discard() {
            this .editing = false;
        },
        remove() {
            this .$parent .tasks .splice( this .index, 1 );
        }
    }
});
// Instancia
let task = new Vue({
    el: '#app',
    data: {
        new_task: '',
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
