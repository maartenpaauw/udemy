new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function () {
            alert('alert!');
        },
        setValue: function (event) {
            this.value = event.target.value;
        }
    }
});