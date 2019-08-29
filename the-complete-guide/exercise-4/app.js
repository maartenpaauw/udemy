new Vue({
    el: '#exercise',
    data: {
        is_highlighted: true,
        is_shrinked: false,
        class_3: 'red-border',
        class_4_1: 'green-border',
        class_4_2: false,
        style_5: 50,
        progress: 1
    },
    methods: {
        startEffect: function () {
            var vm = this;
            setInterval(function () {
                vm.is_highlighted = !vm.is_highlighted;
                vm.is_shrinked = !vm.is_shrinked;
            }, 1000);
        },
        startProgress: function () {
            var vm = this;
            setInterval(function () {
                vm.progress++;
            }, 1)
        }
    },
    computed: {
        classes_1: function () {
            return { highlight: this.is_highlighted, shrink: this.is_shrinked };
        },
        classes_2: function () {
            return ['padding', 'blue-border'];
        },
        classes_4: function () {
            return [this.class_4_1, {'background-red': this.class_4_2 === 'true'}]
        }
    }
});
