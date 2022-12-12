<template>
<div id='app'>
    <ul class="task-list">
        <li @dragover.prevent @drop="dragFinish(-1, $event)" v-if="dragging > -1" class="trash-drop task-item" v-bind:class="{drag: isDragging}">Delete</li>

        <li v-else>
            <input placeholder="Type new task and press enter" type="text" class="new-task task-item" v-model="newItem" @keyup.enter="addItem">
        </li>

        <li class="task-item" v-for="(item, i) in tasks" :key='i' draggable="true" @dragstart="dragStart(i, $event)" @dragover.prevent @dragenter="dragEnter" @dragleave="dragLeave" @dragend="dragEnd" @drop="dragFinish(i, $event)">
            <input type="checkbox" v-model="item.done" />
            <span :class="{done: item.done}">{{ item.title }}</span>
            <span class="remove-item" @click="removeItem(item)">x</span> 
        </li>
    </ul>
</div>
</template>

<script>
const TODO_STORAGE_KEY = "taskstorage";

let taskstorage = {
    fetch: () => JSON.parse(localStorage.getItem(TODO_STORAGE_KEY) || "[]"),
    save: tasks => localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(tasks))
};
export default {
    data() {
        return {
            tasks: taskstorage.fetch(),
            newItem: "",
            dragging: -1
        }
    },
    methods: {
        addItem() {
            if (!this.newItem) {
                return;
            }
            this.tasks.push({
                title: this.newItem,
                done: false
            });
            this.newItem = "";
        },

        removeItem(item) {
            this.tasks.splice(this.tasks.indexOf(item), 1);
        },

        removeItemAt(index) {
            this.tasks.splice(index, 1);
        },

        dragStart(which, ev) {
            ev.dataTransfer.setData('Text', this.id);
            ev.dataTransfer.dropEffect = 'move'
            this.dragging = which;
        },

        dragEnter(ev) {
            console.log(">>>>dragEnter>>>>>");
        },
        dragLeave(ev) {
            console.log("-----dragLeave-----");
        },
        dragEnd(ev) {
            this.dragging = -1
        },

        dragFinish(to, ev) {
            this.moveItem(this.dragging, to);
            ev.target.style.marginTop = '2px'
            ev.target.style.marginBottom = '2px'
        },

        moveItem(from, to) {
            if (to === -1) {
                this.removeItemAt(from);
            } else {
                this.tasks.splice(to, 0, this.tasks.splice(from, 1)[0]);
            }
        },

        computed: {
            isDragging() {
                return this.dragging > -1
            }
        },
        
        watch: {
            tasks: {
                handler: function (tasks) {
                    taskstorage.save(tasks);
                },
                deep: true
            }
        }
    }
}
</script>

<style scoped>
body {
    font-family: "Source Sans Pro", "Arial", sans-serif;
}

* {
    box-sizing: border-box;
}

.task-list {
    list-style-type: none;
    padding: 10px;
}

.done {
    text-decoration: line-through;
    color: #888;
}

.new-task {
    width: 100%;
}

.trash-drop {
    border: 2px dashed #ccc !important;
    text-align: center;
    color: #e33;
}

.trash-drop:-moz-drag-over {
    border: 2px solid red;
}

.task-item {
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 14px 8px;
    margin-bottom: 3px;
    background-color: #fff;
    box-shadow: 1px 2px 2px #ccc;
    font-size: 22px;
}

.remove-item {
    float: right;
    color: #a45;
    opacity: 0.5;
}

.task-item:hover .remove-item {
    opacity: 1;
    font-size: 28px;
}
</style>
