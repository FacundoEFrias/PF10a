import { React, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../img/logoPanda.png";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { searchUser, updateUser } from "../../Redux/actions/index.js";
import { getAllUsers } from "../../Redux/actions/index";
import Swal from "sweetalert2";

const Profile = () => {
	const { user, isAuthenticated } = useAuth0();
	const dispatch = useDispatch();
	var datoUsuario = useSelector(e => e.user)
	const [editFormState, setEditFormState] = useState({
		first_name: '',
		last_name: '',
		nationality: "",
		date_birth: "",
		mobile: "",
		image: "",
		address: "",
		
	});
	const [editFormErrors,setEditFormErrors ] = useState({
		first_name: '',
		last_name: '',
		nationality: "",
		date_birth: "",
		mobile: "",
		image: "",
		address: "",
		
	});

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event) => {
    /*const { name, value } = event.target;
  		let errors = { ...editFormErrors };
		  switch (name) {
			case "first_name":
			  if (!/^[a-zA-Z\s]{2,}$/.test(value)) {
				errors.first_name = "Nombre inválido";
			  } else {
				errors.first_name = "";
			  }
			  break;
			case "last_name":
			  if (!/^[a-zA-Z\s]{2,}$/.test(value)) {
				errors.last_name = "Apellido inválido";
			  } else {
				errors.last_name = "";
			  }
			  break;
			case "email":
			  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
				errors.email = "Email inválido";
			  } else {
				errors.email = "";
			  }
			  break;
			  case "nationality":
				if (!/^[a-zA-Z\s]+$/.test(value)) {
				  errors.nationality = "Nacionalidad inválida";
				} else {
				  errors.nationality = "";
				}
				break;
				case "date_birth":
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    errors.date_birth = "Fecha inválida";
  } else {
    errors.date_birth = "";
  }
  break;case "mobile":
  if (!/^\d{0,10}$/.test(value)) {
    errors.mobile = "Número de teléfono inválido";
  } else {
    errors.mobile = "";
  }
  break;
  case "image":
  if (!/^(ftp|http|https):\/\/[^ "]+$/.test(value)) {
    errors.image = "URL de imagen inválida";
  } else {
    errors.image = "";
  }
  break;

			// Agregar más casos según los campos que tenga el formulario
		  }
		  setEditFormState({ ...editFormState, [name]: value });
		  setEditFormErrors({ ...errors });*/
    setEditFormState({
      ...editFormState,
      [event.target.name]: event.target.value,
    });
  };
  const handleEditSubmit = (event) => {
    event.preventDefault();
    /*		let errors = {};
if (!/^[a-zA-Z\s]+$/.test(editFormState.nationality)) {
errors.nationality = "Nacionalidad inválida";
}
if (!/^\d{4}-\d{2}-\d{2}$/.test(editFormState.date_birth)) {
errors.date_birth = "Fecha inválida";
}
if (!/^\d{0,10}$/.test(editFormState.mobile)) {
errors.mobile = "Número de teléfono inválido";
}
if (!/^(ftp|http|https):[^ "]+$/.test(editFormState.image)) {
errors.image = "URL de imagen inválida";
}
if (!/^[a-zA-Z\s]{2,}$/.test(editFormState.first_name)) {
	errors.first_name = "Nombre inválido";
	}
	if (!/^[a-zA-Z\s]{2,}$/.test(editFormState.last_name)) {
	errors.last_name = "Apellido inválido";
	}
	if (!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(editFormState.email)) {
	errors.email = "Email inválido";
	}
	if (Object.keys(errors).length > 0) {
		setEditFormErrors(errors);
		return;
		}*/
    dispatch(updateUser({ email: user.email }, editFormState));
    dispatch(getAllUsers());
    // Agrega aquí la lógica para actualizar la información en tu base de datos
    setEditFormState({
      first_name: "",
      last_name: "",
      email: user.email,
      nationality: "",
      date_birth: "",
      mobile: "",
      image: "",
      address: "",
    });
    Swal.fire({
      title: "¡Updated user!",
      icon: "success",
    });
    setIsEditing(false);
    location.reload();
  };
  try {
    if (isAuthenticated) {
      const perfiles = Object.values(datoUsuario)
      const perfil = perfiles?.find((obj) => obj.email === user.email);
      
      if (isEditing) {
        return (
          <form className="profile-form" onSubmit={handleEditSubmit}>
            <br />
            <img
              className="imgProfile"
              src={perfil.image ? perfil.image : `${Logo}`}
              alt="no hay imagen"
            />
            <h1 className="h1profile">Name: {perfil.first_name}</h1>
            <h1 className="h1profile">Last Name: {perfil.last_name}</h1>
            <h1 className="h1profile">Email: {perfil.email}</h1>
            <label className="profile-label">
              <input
                className="inputprofile"
                type="text"
                name="first_name"
                placeholder="...Name"
                value={editFormState.first_name}
                onChange={handleInputChange}
              />
            </label>
            <label className="profile-label">
              <input
                className="inputprofile"
                type="text"
                name="last_name"
                placeholder="...Last name"
                value={editFormState.last_name}
                onChange={handleInputChange}
              />
            </label>
            <label className="profile-label">
              <input
                className="inputprofile"
                type="text"
                name="nationality"
                placeholder="...Nationality"
                value={editFormState.nationality}
                onChange={handleInputChange}
              />
            </label>
            <label className="profile-label">
              <input
                className="inputprofile"
                type="text"
                name="mobile"
                placeholder="...Mobile"
                value={editFormState.mobile}
                onChange={handleInputChange}
              />
            </label>
            <label className="profile-label">
              <input
                className="inputprofile"
                type="text"
                name="address"
                value={editFormState.address}
                placeholder="...Adress"
                onChange={handleInputChange}
              />
            </label>
            <label>
              <input
                className="inputprofile"
                type="date"
                name="date_birth"
                value={editFormState.date_birth}
                onChange={handleInputChange}
              />
            </label>
            <label>
              <input
                className="inputprofile"
                type="text"
                name="image"
                placeholder="...Profile Picture"
                value={editFormState.image}
                onChange={handleInputChange}
              />
            </label>
            <button
              className="buttoneditar"
              type="submit"
              onClick={(e) => handleEditSubmit(e)}
            >
              Guardar cambios
            </button>
          </form>
        );
      }
      return (
        <div className="profilecont">
          <img
            className="imgProfile"
            src={perfil.image ? perfil.image : `${Logo}`}
            alt="no hay imagen"
          />
          <h1 className="h1profile">Name: {perfil.first_name}</h1>
          <h1 className="h1profile">Last Name: {perfil.last_name}</h1>
          <h1 className="h1profile">Birthday: {perfil.date_birth}</h1>
          <h1 className="h1profile">Nationality: {perfil.nationality}</h1>
          <h1 className="h1profile">Mobile Phone: {perfil.mobile}</h1>
          <h1 className="h1profile">Email: {perfil.email}</h1>
          <h1 className="h1profile">Address: {perfil.address}</h1>

          <button className="buttoneditar" onClick={handleEditClick}>
            Editar información
          </button>
        </div>
      );
    }
    return <div></div>;
  } catch (err) {
    console.error(err);
  }
};

export default Profile;
