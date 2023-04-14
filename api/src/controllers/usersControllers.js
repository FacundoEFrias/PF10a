const { Users } = require('../db');
const { Op } = require("sequelize")
const nodemailer = require("nodemailer");;


const cloudinary = require('cloudinary').v2;


//! GET show all users Users --------------
// tema de como debo enviar el res.status del error con el next
// terminar de arreglar linea 15 next(err);
async function getAllUsers(req, res, next) {
    try {
        const allUser = await Users.findAll({});
        return res.status(200).send(allUser)
    } catch (err) {
        next(err);
    };
};
async function searchUsuario(req,res){
    try {
        let {email} = req.params
        const user = await Users.findOne({where:{email: email}})
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function postNewUser(req, res) {
    try {
        let {given_name,family_name, email, picture } = req.body;
        
        let user = await Users.findOne({ where: { email: email } });
        if (user) {
            return res.status(200).send({ message: "User already exists" });
        } else {
            let newUser = await Users.create({ first_name: given_name, last_name: family_name ,email: email, image: picture});

            // configurar transporter para enviar correo electrónico
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "snowpandaco@gmail.com", //  correo electrónico
                    pass: "badticzdnopplwxx" //  contraseña se terceros
                }
            });

            //modificar que quiero enviar
            let mailOptions = {
                from: "snowpandaco@gmail.com",
                to: email,
                subject: "¡Bienvenido!",
                text: "Hola " + given_name + ",\n\n¡Gracias por registrarte en nuestro sitio web!\n\nSaludos,\nEl equipo de nuestro sitio web"
            };

            // enviar correo electrónico
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                    res.status(500).json({ error: error });
                } else {
                    console.log("Correo electrónico enviado: " + info.response);
                    res.status(201).send({ message: "User was created and email was sent" });
                }
            });

        }
    } catch (err) {
        res.status(500).json({ err: err });
    };
}




//!-------------- disable    ------ enable  
async function DisableUser(req, res) {
    try {
        let { idUser } = req.params;
        const user = await Users.findOne({
            where: {
              idUser: idUser
            }
        });
        if (user.status === "active") {
            user.update({ status: "disabled" });
        } else if (user.status === "disabled") {
            user.update({ status: "active" });
        }
        res.status(201).json(user);
        //res.send(user);
    } catch (err) {
        res.status(401).json({ message: err });
    };
};

//!-------------- Modifi user -------------------------------  
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
 });
 async function ModifyUser(req, res) {
    try {
       let { email } = req.params;
       let { first_name, last_name, nationality, date_birth, mobile } = req.body;
       const user = await Users.findOne({
          where: {
             email: email
          }
       });
 
       if (!user) {
          return res.status(404).json({msg: "user not found"});
       }
 
       let imageUrl;
 
       if (req.file) {
          // Si se proporcionó un archivo, subirlo a Cloudinary y obtener la URL de la imagen
          const result = await cloudinary.uploader.upload(req.file.path,{
            public_id: email
          });
          imageUrl = result.secure_url;
       } else if (req.body.image) {
          // Si se proporcionó una URL de imagen, subirla a Cloudinary y obtener la URL de la imagen
          const result = await cloudinary.uploader.upload(req.body.image,{
            public_id: email,
            folder: "SnowPandaCO/usuarios"
          });
          imageUrl = result.secure_url;
       }
 
       // Actualizar la información del usuario y la URL de la imagen, si corresponde
       user.update({
          first_name: first_name,
          last_name: last_name,
          nationality: nationality,
          date_birth: date_birth,
          mobile: mobile,
          image: imageUrl,
       });
 
       // Responder con el usuario actualizado
       res.status(201).json(user);
    } catch (err) {
       res.status(401).json({ message: err });
    };
 }
 
// //!! MODIFY STATUS
// async function disableEstatus(req, res) {
//     try {
//       let { idUser } = req.params;
  
//       const statusUsers = await Users.findOne({
//         where: {
//             idUser: idUser,
//         },
//       });
  
//       if (statusUsers.status === true) {
//         statusUsers.update({ status: false });
//       } else if (statusUsers.status === false) {
//         statusUsers.update({ status: true });
//       }
//       res.status(201).json(statusUsers);
//     } catch (err) {
//       res.status(401).json({ error: err });
//     }
//   }

  //!! MODIFY Privilege
async function privilegeEstatus(req, res) {
    try {
      let { idUser } = req.params;
  
      const privilegeUser = await Users.findOne({
        where: {
            idUser: idUser,
        },
      });
  
      if (privilegeUser.privilige === true) {
        privilegeUser.update({ privilige: false });
      } else if (privilegeUser.privilige === false) {
        privilegeUser.update({ privilige: true });
      }
      res.status(201).json(privilegeUser);
    } catch (err) {
      res.status(401).json({ error: err });
    }
  }


module.exports = {
    getAllUsers,
    postNewUser,
    DisableUser,
    ModifyUser,
    searchUsuario,
    //disableEstatus,
    privilegeEstatus,

};