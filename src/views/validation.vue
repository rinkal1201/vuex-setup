<template>
<div id="app">
    <form @submit.prevent="submit" method="post" class="form" style="margin-top:40px;">
        <div>
            <label for="name">Name:</label>
            <input id="name" name="name" v-validate="'required'" type="text" v-model="user.name" class="form-control" />
            <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
        </div>
        <div>
            <label for="city">City:</label>
            <input id="city" name="city" v-validate="'required'" type="text" v-model="user.city" class="form-control" />
            <span v-show="errors.has('city')" class="text-danger">{{ errors.first('city') }}</span>
        </div>
        <div>
            <label for="gender">Gender:</label>
            <select id="gender" name="gender" v-model="user.gender" class="form-control" v-validate="'required'">
                <option>Female</option>
                <option>Male</option>
            </select>
            <span v-show="errors.has('gender')" class="text-danger">
                {{ errors.first('gender') }}
            </span>
        </div>
        <div>
            <label for="phone">Phone:</label>
            <input id="phone" name="phone" v-validate="'required'" type="text" v-model="user.phone" class="form-control" />
            <span v-show="errors.has('phone')" class="text-danger">
                {{ errors.first('phone') }}
            </span>
        </div>
        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" v-validate="'required|email'" type="text" v-model="user.email" class="form-control" />
            <span v-show="errors.has('email')" class="text-danger">
                {{ errors.first('email') }}
            </span>
        </div>
        <div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
        </div>
    </form>
</div>
</template>

<script>
import Vue from 'vue'
import {
    ValidationProvider
} from 'vee-validate';
Vue.component('ValidationProvider', ValidationProvider);
export default {
    components: {
        ValidationProvider
    },
    data() {
        return {
            user: {
                email: '',
                city: '',
                name: '',
                phone: '',
                gender: ''
            }
        }
    },
    methods: {
        submit() {
            this.$validator.validateAll().then((result) => {});
        }
    }
}
</script>

<style scoped>
h2 {
    margin: 20px 0;
    text-align: center;
}

.form {
    max-width: 380px;
    padding: 15px 35px 45px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

label {
    margin: 12px 0 2px 0;
}

button {
    margin: 15px 0 0 0;
}
</style>
