var btnSuccess = {
    template: '<div><span>{{count}}</span><button class="btn-success" @click="onClick">点击</button></div>',
    data: function() {
        return {
            count: 0
        }
    },
    methods: {
        onClick: function () {
            this.count += 1;
        }
    }
};

export {btnSuccess};
