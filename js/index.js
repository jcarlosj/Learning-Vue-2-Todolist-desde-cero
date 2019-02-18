// Code Vue
let task = new Vue({
    el: '#app',
    data: {
        new_task: '',
        tasks: [
            {
                description: 'Aprender Foundation',
                pending: true,
                editing: false
            },
            {
                description: 'Aprender Angular',
                pending: true,
                editing: true
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
        }
    }
});
