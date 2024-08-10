import { LOCAL_STORAGE_TOKEN_KEY } from '../constants/localStorage'

export const LOCAL_STORAGE_ACCESS_ERROR = 'Ошибка доступа к localStorage'

export const localStorageHandler = {
	getItem(key: string){
		try {
			return localStorage.getItem(key)
		} catch (e) {
			console.log(LOCAL_STORAGE_ACCESS_ERROR, e)
		}
	},
	setItem(key: string, value: string){
		try {
			localStorage.setItem(key, value)
		} catch (e) {
			console.log(LOCAL_STORAGE_ACCESS_ERROR, e)
		}
	},
	removeItem(key: string){
		try {
			localStorage.removeItem(key)
		} catch (e) {
			console.log(LOCAL_STORAGE_ACCESS_ERROR, e)
		}
	}
}

export const tokenFromStorageGet = () => localStorageHandler.getItem(LOCAL_STORAGE_TOKEN_KEY)
export const tokenToStorageSet = (token: string) => localStorageHandler.setItem(LOCAL_STORAGE_TOKEN_KEY, token)
export const tokenFromStorageRemove = () => localStorageHandler.removeItem(LOCAL_STORAGE_TOKEN_KEY)