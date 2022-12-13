<template>
<div class="container">
    <div class="col-xs-12">
        <div class="row  form-row" v-for="(row, key) in rows" :key='key'>
            <div class="col-xs-12">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="col-xs-3">
                            <select name="" id="" class="form-control" v-model="row.select">
                                <option :value="i.value" v-for="(i, option) in options" :key='option'>{{ i.label }}</option>
                            </select>
                        </div>
                        <div class="col-xs-6">
                            <input type="text" class="form-control" placeholder="Value" v-model="row.name">
                        </div>
                        <div class="col-xs-1">
                            <button class="btn btn-danger" @click="deleteRow(row)">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <button type="submit" class="btn btn-info">Submit</button>
                <button type="submit" class="btn btn-success" @click="addRow">Add Row</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

    data() {
        return {
            options: [{
                    'label': 'Text',
                    'value': 1
                },
                {
                    'label': 'Numeric',
                    'value': 2
                },
                {
                    'label': 'Drop down',
                    'value': 3
                },
                {
                    'label': 'Image',
                    'value': 4
                },
                {
                    'label': 'Date',
                    'value': 5
                },
            ],
            rows: [{
                'select': 1,
                'name': '',
            }]
        }

    },
    methods: {
        addRow: function () {
            this.rows.push({
                'select': 1,
                'name': '',
            });
        },
        deleteRow: function (row) {
            this.rows.$remove(row);
        },
    }
}
</script>

<style>
.form-row {
    border: 1px solid #e2e2e2;
    margin: 10px;
    padding: 20px;
    background: #f2f2f2;
}

.subrow {
    margin: 5px;
    padding: 5px;
}
</style>
