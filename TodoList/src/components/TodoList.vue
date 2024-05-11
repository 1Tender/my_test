<template>
    <h1>{{ name }}的TODO-LIST</h1>
    <input type="text" v-model="todo">
    <button @click="addTodo()">提交</button>
    <div>任务总数: {{ todoList.lengtg }}</div>
    <div>完成数量: {{ completeTotal }}</div>
    <button @click="restart()">清空</button>
    <ul>
        <li v-for="(todo, index) in todoList" :key="index">
        ({{ todo.complete ? '已完成' : '待完成'}}){{ todo.title }}
        <button @click="completeTodo(index)">完成</button>
        </li>
    </ul>
</template>

<script setup>
import { ref, computed } from 'vue'
defineProps({
    name:String,
})
const todos = ref('');
const todoLisst = ref([]);
const addTodo = () => {
    todoLisst.value.unshift({
        tittle: todos.value,
        complete:false
    });
    todos.value = '';
};
const completeTodo = (index) => {
    todoLisst.value[index].complete = true;
};
const completeTotal = computed(() => {
    return todoLisst.value.filter(todo => todo.complete).length;
    //console.log(todoLisst.value.filter(todo => todo.complete))
})
</script>

<style lang="scss" scoped>

</style>