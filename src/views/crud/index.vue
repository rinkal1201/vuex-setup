<template>
<div>
    <div>
        {{title}}
        <input class="input" type="text" v-model="detail" v-on:keyup.enter="submitData">
        <button type="button" class="btn btn-secondary ml-3" @click="submitData">Submit</button>
        <div v-for="(i, key) in test" :key='key' class="d-flex">
            <div>
                <h2>{{i.name}}</h2>
            </div>
            <div>
                <button type="button" class="btn btn-danger ml-5" @click="removeData(i)">Remove</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Data store in localstorage',
            test: [],
            detail: ''
        }
    },
    methods: {
        submitData() {
            this.test.push({
                name: this.detail,
            });
            this.detail = '';
            localStorage.setItem('test-vue', JSON.stringify(this.test));
        },
        removeData(i) {
            this.test.splice(i, 1);
            localStorage.setItem('test-vue', JSON.stringify(this.test));
        },
    },
    created: function () {
        let getData = JSON.parse(localStorage.getItem('test-vue'));
        if (getData === null) {
            this.test = [];
        } else {
            this.test = getData;
        }
    }
}
</script>
