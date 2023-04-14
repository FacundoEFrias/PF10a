import { React, useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import Logo from '../../img/logoPanda.png';
import { useDispatch, useSelector } from 'react-redux'
import './Profile.css'
import { searchUser, updateUser, } from '../../Redux/actions/index.js'
import { getAllUsers } from '../../Redux/actions/index'

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();
	const dispatch = useDispatch();
	const datoos = useSelector(e => e.user)
	const [editFormState, setEditFormState] = useState({
		first_name: '',
		last_name: '',
		nationality: "",
		date_birth: "",
		mobile: "",
		image: "",
	});

	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {

		dispatch(getAllUsers())
	}, [dispatch])

	const handleEditClick = () => {
		setIsEditing(true);
	}

	const handleInputChange = (event) => {
		setEditFormState({
			...editFormState,
			[event.target.name]: event.target.value
		});
	}
	const handleEditSubmit = (event) => {
		event.preventDefault();
		dispatch(updateUser({ email: user.email }, editFormState))
		//dispatch(searchUser({ email: user.email }))
		dispatch(getAllUsers())
		window.location.reload();
		alert("usuario cambiado correctamente");
		// Agrega aquí la lógica para actualizar la información en tu base de datos
		setEditFormState({
			first_name: '',
			last_name: '',
			email: user.email,
			nationality: "",
			date_birth: "",
			mobile: "",
			image: "",
		})
		setIsEditing(false);
	}
	try {
		if (isAuthenticated) {
			const perfil = datoos.find(obj => obj.email === user.email);
			if (isEditing) {
				return (
					<form className='profile-form' onSubmit={handleEditSubmit}>
						<br />
						<img className='imgProfile' src={perfil.image ? perfil.image : `${Logo}`} alt='no hay imagen' />
						<h1 className='h1profile'>Name: {perfil.first_name}</h1>
						<h1 className='h1profile'>Last Name: {perfil.last_name}</h1>
						<h1 className='h1profile'>Email: {perfil.email}</h1>
						<label className='profile-label'>
							<input className='inputprofile' type="text" name="first_name" placeholder="...Name" value={editFormState.first_name} onChange={handleInputChange} />
						</label>
						<label className='profile-label'>
							<input className='inputprofile'  type="text" name="last_name" placeholder="...Last name" value={editFormState.last_name} onChange={handleInputChange} />
						</label>
						<label className='profile-label'>			
								
								<input className='inputprofile' type="text" name="nationality" placeholder="...Nationality" value={editFormState.nationality} onChange={handleInputChange} />
							</label>
							<label className='profile-label'>
							
							<input className='inputprofile' type="text" name="mobile" placeholder="...Mobile" value={editFormState.mobile} onChange={handleInputChange} />
						</label>
						<label>
							
							<input className='inputprofile' type="date" name="date_birth" value={editFormState.date_birth} onChange={handleInputChange} />
						</label>
						<label >						
							<input className='inputprofile' type="text" name="image" placeholder="...Profile Picture" value={editFormState.image} onChange={handleInputChange} />
						</label>
						<button className='buttoneditar' type="submit" onClick={(e) => handleEditSubmit(e)}>Guardar cambios</button>
					</form>
				)
			}
			return (
				<div className='profilecont'>
					<img className='imgProfile' src={perfil.image ? perfil.image : `${Logo}`} alt='no hay imagen' />
					<h1 className='h1profile'>Name:  {perfil.first_name}</h1>
					<h1 className='h1profile'>Last Name:  {perfil.last_name}</h1>
					<h1 className='h1profile'>Birthday:  {perfil.date_birth}</h1>
					<h1 className='h1profile'>Nationality:  {perfil.nationality}</h1>
					<h1 className='h1profile'>Mobile Phone:  {perfil.mobile}</h1>
					<h1 className='h1profile'>Email:  {perfil.email}</h1>
					<button  className='buttoneditar' onClick={handleEditClick}>Editar información</button>
				</div>
			)
		}
		return (
			<div>
			</div>
		)
	} catch (err) {
		console.error(err)
	}
}

export default Profile