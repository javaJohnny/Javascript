Vue.component('task', {
    props: ['time', 'taskIndex'],
    template: `
        <li class="list-group-item">
            <slot></slot> | {{ time }} | <button @click="$emit('deleteTask', 'taskIndex')">X</button>
        </li>
    `,
});

Vue.component('task-list', {
    template: `
        <ul class="list-group">
            <task
                v-for="(task, index) in tasks"
                @deleteTask="removeTask"
                :taskIndex="index"
                :time="task.time">
                    {{ task.description }}
            </task>
        </ul>
    `,
    data() {
        return {
            tasks: [
                {description: 'Make Bed', time: 5},
                {description: 'Shower', time: 10},
                {description: 'Feed Cat', time: 1},
            ],
        }
    },
    methods: {

        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }
})

new Vue ({
    el: '#app',
})
