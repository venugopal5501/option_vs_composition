<template>
    <div class="option">
        <h3>you have <span>{{ itemsCount }}</span></h3>
        <div>
            <input type="text" placeholder="Add a Item" v-model="newItem" @keyup.enter="addItem" />
        </div>
        <div>
            <ul>
                <li v-for="(item, index) in items" :key="item.id">
                    <span>{{ item.name }}</span>
                    <button @click="deleteItem(index)">X</button>
                </li>
            </ul>
        </div>
        </div>


</template>

<script>
import { ref, computed, watch } from 'vue'
export default {
    name: 'CompositionPage',
    setup() {
        const newItem = ref('')
        const items = ref([])
        const itemNotAvailable = ['knife', 'lighter', 'pin']
        const itemsCount = computed(() => { return items.value.length })
        function addItem() {
            let item = { name: newItem.value }
            items.value.push(item)
            newItem.value = ''
        }
        function deleteItem(index) {
            items.value.splice(index, 1)
        }
        watch(newItem, (newValue) => {
            if (itemNotAvailable.includes(newValue.toLowerCase())) {
                newItem.value = ''
                alert('You never get this ' + newValue + ' item')
            }
        })
        return {
            newItem,
            items,
            addItem,
            deleteItem,
            itemsCount
        }

    }
}
</script>

<style></style>