const { Reviews, Users, Bills, Products } = require("../db");


//! GET /ALL
const getAllReviews = async (req, res) => {
    try {
      const allReviews = await Reviews.findAll({});
      res.status(200).json(allReviews);
    } catch (err) {
      res.status(404).json(console.log(err));
    }
  };

//! GET /ID

const getReviewsById = async (req, res) => {
    const { id } = req.params;
  
    try {
      const IDReviews = await Reviews.findOne({
        where: { idReviews: id },
      });
      if (IDReviews === null) {
        res.status(404).json({ msn: "Reviews not found" });
      }
      res.status(200).json(IDReviews);
    } catch (err) {
      res.status(404).json("Reviews not found", err);
    }
  };



//! POST

const postReviews = async (req, res) =>{
 const { comment, rating, firstName, commentDate} = req.body
 console.log(comment , "asdfasd")
 try {
    // const approvedBills = await Bills.findAll(
    //     {
    //       where: {
    //            idUser,
    //         payment_status: 'approved'
    //       }
    //     });
    //     if(approvedBills.length === 0){
    //         res.status(401).send('error')     
    //     }

        const newReview = await Reviews.create({
            commentDate,
            comment,
            firstName,
            rating
        },
        // {
        //     include: [
        //       {
        //         model: User,
        //         attributes: ['idUser', 'name'] // Atributos del usuario que quieres mostrar
        //       },
        //       {
        //         model: Products,
        //         attributes: ['productsID', 'name'] // Atributos del hotel que quieres mostrar
        //       }
        //     ]
        //   }
        )
        res.status(202).send(newReview)
 } catch (error) {
    //res.status(404).send(error)
    console.log(error)
 }
}

//! PUT MODIFY STATUS ((hidden))
async function disableReviews(req, res) {
    try {
      let { idReviews } = req.params;
  
      const statusReviews = await Reviews.findOne({
        where: {
            idReviews: idReviews,
        },
      });
  
      if (statusReviews.hidden === true) {
        statusReviews.update({ hidden: false });
      } else if (statusReviews.hidden === false) {
        statusReviews.update({ hidden: true });
      }
      res.status(201).json(statusReviews);
    } catch (err) {
      res.status(401).json({ error: err });
    }
  } 
      
  

//! DELETE


module.exports = {
    getAllReviews,
    postReviews,
    getReviewsById,
    disableReviews,
}
