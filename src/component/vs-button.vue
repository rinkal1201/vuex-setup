<template>
<div>
    <p>{{title}}</p>
    <button type="button" class="btn btn-secondary" :class="type" :style="[bgColor,borderColor,borderSize]">Submit</button>
</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
        border: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ""
        }
    },
    computed: {
        bgColor() {
            return {
                'background-color': this.color
            };
        },
        borderColor() {
            return {
                border: '1px solid' + ' ' + this.border
            };
        },
        borderSize() {
            return {
                padding: this.size + '' + 'px'
            };
        },
    },
    mounted() {
        // console.log(this.borderSize);
    }
}
</script>

<style scoped>

</style>
