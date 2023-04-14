import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
require('./Logout.css');



const Logout = () => {

	const { logout } = useAuth0();

	return (
		<div onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
			Log Out
		</div>
	)
}



export default Logout