import { tokenFromStorageGet } from './localStorageHandler'
import ky from 'ky'


export const apiService = ky.create({
	prefixUrl: 'https://qp266-backend.onrender.com/api/',
	mode: 'cors',
	hooks: {
		beforeRequest: [
            (options) => {
                const token = tokenFromStorageGet()
                if (token != null){
                    options.headers.set('Authorization', token)
                }
            }
        ]
	}
})