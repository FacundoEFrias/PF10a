import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2';
require('./Logout.css');



const Logout = () => {

	const { logout } = useAuth0();

	const handleLogout = async () => {
		logout({ logoutParams: { returnTo: window.location.origin } });
		Swal.fire({
			icon: 'success',
			title: 'Success',
			text: 'You have successfully logged out'
			});
	  };

	return (
		<div onClick={() => handleLogout() }>
			Log Out
		</div>
	)
}



export default Logout