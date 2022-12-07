<template>
<div id="app" class="container">
    <form @submit.prevent="onUserSubmit" style="margin-top:40px">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter name" v-model="name">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter email" v-model="email">
        </div>
        <button type="submit" class="btn btn-primary" style="height:35px;width:100px">Add</button>
    </form>

    <div class="container table-responsive py-5">
        <table class="table table-bordered table-hover">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Twubric Score </th>
                    <th scope="col">Friends</th>
                    <th scope="col">Influence</th>
                    <th scope="col">Chirpiness</th>
                    <th scope="col">Join Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(i, key) in testsList" :key='key'>
                    <td>{{i.uid}}</td>
                    <td>{{i.username}}</td>
                    <td><img :src="i.image" height="30" width="30" /></td>
                    <td>{{i.twubric.total}}</td>
                    <td>{{i.twubric.friends}}</td>
                    <td>{{i.twubric.influence}}</td>
                    <td>{{i.twubric.chirpiness}}</td>
                    <td>{{i.join_date}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <router-view />
</div>
</template>

<script>
import {
    mapActions,
    mapGetters
} from "vuex";
import store from "./store";
export default {
    name: 'AddUser',
    data() {
        return {
            name: '',
            email: ''
        }
    },
    methods: {
        ...mapActions(["addUsers"]),
        ...mapActions(["fetchTests"]),
        onUserSubmit() {
            this.addUsers({
                name: this.name,
                email: this.email
            })
        },
    },
    computed: mapGetters(["testsList"]),
    mounted() {
        store.dispatch("fetchTests");
    }
}
</script>

<style>
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
