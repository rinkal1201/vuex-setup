<template>
<div>
    <div class="card">
        <input @change="toggleTheme" id="checkbox" type="checkbox" class="switch-checkbox" />
        <label for="checkbox" class="switch-label">
            <div class="switch-toggle" :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"></div>
        </label>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            userTheme: "light-theme",
        };
    },
    methods: {
        setTheme(theme) {
            localStorage.setItem("user-theme", theme);
            this.userTheme = theme;
            document.documentElement.className = theme;
        },
        toggleTheme() {
            const activeTheme = localStorage.getItem("user-theme");
            if (activeTheme === "light-theme") {
                this.setTheme("dark-theme");
            } else {
                this.setTheme("light-theme");
            }
        },
    },
    data() {
        return {
            userTheme: "light-theme",
        };
    },
};
</script>

<style>
:root {
    --background-color-primary: #ebebeb;
    --background-color-secondary: #fafafa;
    --accent-color: #cacaca;
    --text-primary-color: #222;
    --element-size: 4rem;
}

:root.dark-theme {
    --background-color-primary: #1e1e1e;
    --background-color-secondary: #2d2d30;
    --accent-color: #3f3f3f;
    --text-primary-color: #ddd;
}

p {
    color: var(--text-primary-color);
}

.container-center {
    background-color: var(--background-color-primary);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    padding: 2rem 4rem;
    height: 100%;
    width: 100%;
    text-align: center;
    border: 1px solid var(--accent-color);
    border-radius: 4px;
    background-color: var(--background-color-secondary);
}

.switch-checkbox {
    display: none;
}

.switch-label {
    width: var(--element-size);
    border-radius: var(--element-size);
    border: calc(var(--element-size) * 0.025) solid var(--accent-color);
    padding: calc(var(--element-size) * 0.1);
    font-size: calc(var(--element-size) * 0.3);
    height: calc(var(--element-size) * 0.35);
    align-items: center;
    background: var(--text-primary-color);
    cursor: pointer;
    display: flex;
    position: relative;
    transition: background 0.5s ease;
    justify-content: space-between;
    z-index: 1;
}

.switch-toggle {
    position: absolute;
    background-color: var(--background-color-primary);
    border-radius: 50%;
    top: calc(var(--element-size) * 0.07);
    left: calc(var(--element-size) * 0.07);
    height: calc(var(--element-size) * 0.4);
    width: calc(var(--element-size) * 0.4);
    transform: translateX(0);
    transition: transform 0.3s ease, background-color 0.5s ease;
}
</style>
