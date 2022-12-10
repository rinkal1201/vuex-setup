<template>
<div id="app" class="container">
    <button @click="toggleDark()">
        Toggle Color Mode
    </button>
</div>
</template>

<script>
import {
    useDark,
    useToggle
} from "@vueuse/core";
const isDark = useDark({
    selector: "body",
    attribute: "theme",
    valueDark: "custom-dark",
    valueLight: "custom-light",
});
const toggleDark = useToggle(isDark);
</script>

<style>
[theme="custom-dark"] {
    background: #16171d;
    color: #fff;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
