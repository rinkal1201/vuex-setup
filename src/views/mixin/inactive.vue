<template>
<div class="hello">
    <h2>Inactive Users</h2>
    <ul>
        <li style="display:block;" v-for="(i, key) in inactiveUsers" :key='key'>Name: {{i.name}}, Age: {{i.age}}</li>
    </ul>
</div>
</template>

<script>
import {
    mixin
} from '../../mixins/mixin.js'
export default {
    name: 'Mixins',
    mixins: [mixin],
    data() {
        return {
            status: 0,
            users: [{
                    name: 'glo abredit',
                    age: 27,
                    status: 0,
                    created_at: '2017-09-11'
                },
                {
                    name: 'gia fella',
                    age: 29,
                    status: 1,
                    created_at: '2017-09-01'
                },
                {
                    name: 'ohaneze david',
                    age: 23,
                    status: 0,
                    created_at: '2017-09-09'
                },
                {
                    name: 'paul david',
                    age: 21,
                    status: 1,
                    created_at: '2017-09-21'
                },
                {
                    name: 'john williams',
                    age: 20,
                    status: 0,
                    created_at: '2017-03-13'
                },
                {
                    name: 'mary jokers',
                    age: 28,
                    status: 1,
                    created_at: '2017-09-30'
                },
                {
                    name: 'chris aloha',
                    age: 27,
                    status: 0,
                    created_at: '2017-09-19'
                },
                {
                    name: 'johnson silva',
                    age: 29,
                    status: 0,
                    created_at: '2017-09-17'
                },
                {
                    name: 'sens carlos',
                    age: 26,
                    status: 0,
                    created_at: '2017-09-04'
                },
                {
                    name: 'sophia nkom',
                    age: 25,
                    status: 0,
                    created_at: '2017-09-05'
                },
                {
                    name: 'jo westley',
                    age: 22,
                    status: 1,
                    created_at: '2017-09-16'
                },
                {
                    name: 'sam john',
                    age: 24,
                    status: 0,
                    created_at: '2017-04-01'
                },
                {
                    name: 'dia dia',
                    age: 27,
                    status: 1,
                    created_at: '2017-05-08'
                }
            ]
        }
    },
    // methods: {
    //     getData() {
    //         var status = this.status;
    //         return this.users.filter(function (users) {
    //             console.log(users.status, ">>>>>>>>>>");
    //             return users.status == status;
    //         });
    //     },
    //     filter_by_date(users) {
    //         return users.sort(function (a, b) {
    //             return a.created_at > b.created_at;
    //         })
    //     }
    // },
    computed: {
        inactiveUsers: function () {
            return this.filter_by_date(this.getData());
        }
    },
    mounted() {
        console.log(this.inactiveUsers);
    }
}
</script>
