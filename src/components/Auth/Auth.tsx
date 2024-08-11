import { tokenFromStorageGet } from '../../shared/libs/localStorageHandler'
import { baseUrl } from '../../shared/constants/baseUrl'
import { Outlet } from 'react-router-dom'

export default function Auth(){
	if(tokenFromStorageGet() != null){
		window.location.replace(baseUrl)
	}

	return (
		<>
			<Outlet/>
		</>
	)
}
