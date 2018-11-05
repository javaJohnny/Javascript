Vue.component('task', {
    template:`
    <li class="list-group">
    <slot></slot>
    </li>
    `
});

new Vue({
    el:'#app',
})
