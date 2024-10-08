<template>
</template>

<script>
import { ref, computed, watch } from 'vue'
export default {
    name: 'CompositionPage',
    setup() {
        const newItem = ref('')
        const items = ref([])
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