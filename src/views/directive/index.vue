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

        <h2>{{ name| uppercase }}</h2>

        <p><strong>Details : </strong> 
            {{ details | capitalising }}
        </p>

    </div>
</div>
</template>

<script>
export default {
    name: "Index",
    data: function () {
        return {
            name: "rinkalkevadiya",
            details: "may imply inherent, essential resemblance rather than obvious or superficial likenesses."
        };
    },

    filters: {
        uppercase: function (value) {
            return value.toUpperCase();
        },

        capitalising: function (data) {
            var capitalized = []
            data.split(' ').forEach(word => {
                capitalized.push(
                    word.charAt(0).toUpperCase() +
                    word.slice(1).toLowerCase()
                )
            })
            return capitalized.join(' ')
        }
    },

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
