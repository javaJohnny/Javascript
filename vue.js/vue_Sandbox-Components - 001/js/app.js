Vue.component('task-list', {
    template:
    `
        <ul class="list-group">
            <task v-for="task in tasks">{{ task }}</task>
        </ul>
    `,

    data() {
        return {
            tasks: [
                { description: 'Make Bed', completed: false},
                { description: 'Shower', completed: false},
                { description: 'Feed Cats', completed: false},
            ]
        }
    }
});

Vue.component('task', {
    template:
    `
    <li
        class="list-group-item"
        :class="{ 'completed' : completed }"
        @click="toggleCompleted">
        <slot></slot>
    </li>
    `,

    data() {
        return{
            completed: false,
        }
    }

    methods: {
        toggleCompleted() {
            this.completed = !this.completed;
        }
    }
});

new Vue({
    el: '#app',
    data: {

    }
})
