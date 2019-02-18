// Code Vue
let task = new Vue({
    el: '#app',
    data: {
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
    }
});
