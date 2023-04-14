
const { Router } = require("express");
const {getAllUsers,postNewUser, DisableUser, ModifyUser, searchUsuario,disableEstatus,privilegeEstatus } = require('../controllers/usersControllers')

const router = Router();

router.get('/', getAllUsers);
router.post('/create', postNewUser)
router.put("/disable/:idUser", DisableUser)
router.put("/modify/:email", ModifyUser)
router.get("/:email", searchUsuario)
//router.put("/disable/:idUser'", disableEstatus)
router.put('/privilege/:idUser', privilegeEstatus)


 

module.exports = router;