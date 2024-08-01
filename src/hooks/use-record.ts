import { ref, onMounted } from 'vue'
export function useRecord() {
    const records = ref<
        Array<{
            id: number
            manifestation: string
            addTime: number
        }>
    >([])

    function addRecord(record) {
        records.value.push(record)
        localStorage.setItem('_divination_records', JSON.stringify(records.value))
    }
    onMounted(() => {
        records.value = JSON.parse(localStorage.getItem('_divination_records') || '[]')
    })

    return {
        records,
        addRecord
    }
}
