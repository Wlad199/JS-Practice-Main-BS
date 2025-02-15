import { ref, watch } from 'vue'

export function useStorage(key) {
	let storedValue = localStorage.getItem(key)
	let val = ref(storedValue)


	watch(val, write)

	function write() {
		if (val.value === '') {
			localStorage.removeItem(key)
		} else {
			localStorage.setItem(key, val.value)
		}
	}

	return val
}