<template>
<div>
    <div style="margin-top:40px">
        <label class="switch">
            <input type="checkbox" @click="toggleSwitch">
            <div class="slider round"></div>
        </label>
        <p :style="checkbox==false ? 'color:green;' : 'color:red;'">{{ checkbox }}</p>
    </div>
</div>
</template>

<script>
export default {
    name: "Toggle",
    data: function () {
        return {
            checkbox: false
        };
    },
    methods: {
        toggleSwitch() {
            this.checkbox = !this.checkbox
        }
    },
};
</script>

<style scoped>
.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    display: none;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: green;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked+.slider {
    background-color: red;
}

input:focus+.slider {
    box-shadow: 0 0 1px red;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>
