import { ref, onMounted } from 'vue'
import type { Record } from '@/types'
export function useRecord() {
    const records = ref<Array<Record>>([])

    function addRecord(record: Record) {
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
