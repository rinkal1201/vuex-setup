<template>
<div>
    <div>
        <label v-fontSize>Hover On ME</label>
        <h1 v-color="'red'">
            Good Morning</h1>

        <h2 v-color="'yellow'">
            Hello</h2>

        <p v-color="'green'">
            Hii</p>
    </div>
</div>
</template>

<script>
export default {
    name: "Index",

    directives: {
        // Directives for font size.
        fontSize: {
            bind(el, binding) {
                el.onmouseover = function () {
                    el.style.fontSize = "50px";
                };
                el.onmouseout = function () {
                    el.style.fontSize = "15px";
                };
            }
        },

        // Directives for dynamic color.
        color: {
            bind(el, binding) {
                el.style.color = binding.value;
            }
        }
    },

};
</script>

<style scoped>
    </style>
