import { tokenFromStorageGet } from '../../shared/libs/localStorageHandler'
import { Outlet } from 'react-router-dom'

export default function Auth(){
	if(tokenFromStorageGet() != null){
		window.location.replace('/')
	}

	return (
		<>
			<Outlet/>
		</>
	)
}
