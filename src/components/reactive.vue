<template>
    <div class="option">
        <h3>you have <span> {{ itemsCount }}</span> items</h3>
        <div>
            <input type="text" placeholder="Add a Item" v-model="data.newItem" @keyup.enter="addItem" />
        </div>
        <div>
            <ul>
                <li v-for="(item,index) in data.items" :key="item.id">
                    <span>{{ item.name }}</span>
                    <button @click="deleteItem(index)">X</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { reactive, computed, watch } from 'vue'
export default {
    name: 'ReactiveObject',
    setup() {
        const data = reactive({
            newItem: '',
            items: []
        })
        const itemNotAvailable = ['knife', 'lighter', 'pin']
        const itemsCount = computed(() => { return data.items.length })
        function addItem() {
            let item = { name: data.newItem }
            data.items.push(item)
            data.newItem = ''
        }
        function deleteItem(index) {
            data.items.splice(index, 1)
        }
        watch(data, (newValue) => {
            if (itemNotAvailable.includes(newValue.newItem.toLowerCase())) {
                alert("You never get this " + newValue.newItem + " item")
                data.newItem = ''
            }
        })
        return {
            data,
            addItem,
            deleteItem,
            itemsCount


        }
    }
}
</script>

<style></style>