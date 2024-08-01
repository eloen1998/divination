const STORAGE_KEY = '_divination_record'

export function get() {
    const value = localStorage.getItem(STORAGE_KEY)
    return value ? JSON.parse(value) : data
}

export function set(data: any) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}
