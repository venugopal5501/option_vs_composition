<template>
    <div class="option">
        <h3>You have <span>{{ itemsCount }}</span></h3>
        <div>
            <input type="text" placeholder="Add a item" v-model="newItem" @keyup.enter="addItem">

        </div>
        <ul>
            <li v-for="(item, index) in items" :key="item.id">
                <span>{{ item.name }}</span>
                <button @click="deleteItem(index)">X</button>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name: 'OptionPage',
    data() {
        return {
            newItem: '',
            items: [],
            itemNotAvailable: ['knife', 'lighter', 'pin']
        }
    },
    computed: {
        itemsCount() {
            return this.items.length
        }
    },
    methods: {
        addItem() {
            let item = { name: this.newItem }
            this.items.push(item)
            this.newItem = ''
        },
        deleteItem(index) {
            this.items.splice(index, 1)
        }
    },
    watch: {
        newItem(newValue) {
            if (this.itemNotAvailable.includes(newValue.toLowerCase())) {
                this.newItem = ''
                alert("You never get this " + newValue + "item")
            }
        }
    }
}

</script>

<style>
h3 {
    color: burlywood;
}

h3 span {
    color: red;
}

ul {
    list-style: none;
    padding: 0;
    width: 200px;
    margin: 20px auto 0;
}

li {
    border: 1px solid;
    display: flex;
    margin-bottom: 10px;
}

li span {
    flex-grow: 1;
}
</style>