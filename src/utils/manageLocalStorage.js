
export const getLocalStorage = key => {
   return localStorage.getItem(key)
}

export const setLocalStorage = value => {
    localStorage.setItem('lang', value)
}

export const localStorageIsEmpty = () => localStorage.length > 0

export const clearStorage = () => localStorage.clear()