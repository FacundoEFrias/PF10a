const { Products} = require("../db");
const { Op } = require("sequelize");

//!! GET de por categorias

const getProductsByCategory = async (req,res) => {
  const {access} = req.params;
  const newAccess = access.slice(1)
    try {
        const allData = await Products.findAll({
        })
        const productsCategory = allData.filter(e => e.category === newAccess);
        res.status(200).json(productsCategory)
    } catch (err) {
        res.status(404).json(err.message)
    }
}
//!! GET de por marca

const getProductsByBrand = async (req,res) => {
  const {access} = req.params;
  const newAccess = access.slice(1)
    try {
        const allData = await Products.findAll({
        })
        const productsBrand = allData.filter(e => e.brand === newAccess);
        res.status(200).json(productsBrand)
    } catch (err) {
        res.status(404).json(err.message)
    }
}

//!! GET todos los products

const getAllProducts = async (req,res) => {
    try {
        const allProducts = await Products.findAll({})
        res.status(200).json(allProducts)
    } catch (err) {
        res.status(404).json(err.message)
    }
}

//!! GET : ID
//esto es para cambiarle el status de 

const getProductsById = async (req,res) => {
    const {id} = req.params;
    
    try{
        const IDproducts = await Products.findOne({
            where: {productsID:id,
            },
        })
        if(IDproducts === null){res.status(404).json({msn:"Product not found"})}
        res.status(200).json(IDproducts)      
    }catch(err){
      res.status(404).json("Product not found", err)
}
} 
//!! POST 

const postNewProducts = async (req,res) => {
    let{
      
        name,
        category,
        img,
        sizes,
        numbersizes,
        boardsizes,
        description,
        price,
        material,
        activity,
        brand,
        model,
        
    }= req.body;

    try {
        await Products.findOrCreate({ 
            where: { name },
            defaults: {
            category,
            img,
            sizes,
            numbersizes,
            boardsizes,
            description,
            price,
            material,
            activity,
            brand,
            model,
            },

        }) 
        res.status(200).json("Product created")
        
    } catch (error) {
        console.log(error)
    }
}
//!! MODIFY STATUS 
async function disableProducts(req, res) {
    try {
      let { productsID } = req.params;
  
      const statusProduct = await Products.findOne({
        where: {
            productsID: productsID
        }
      });
  
      if (statusProduct.status === true) {
        statusProduct.update({ status: false });
      } else if (statusProduct.status === false) {
        statusProduct.update({ status: true });
      }
      res.status(201).json(statusProduct);
    } catch (err) {
      res.status(401).json({ error: err });
    };
  };

  //!! MODIFY featuredProduct 
async function featuredProducts(req, res) {
    try {
      let { productsID } = req.params;
  
      const featuredProduct = await Products.findOne({
        where: {
            productsID: productsID
        }
      });
  
      if (featuredProduct.featuredProduct === true) {
        featuredProduct.update({ featuredProduct: false });
      } else if (featuredProduct.featuredProduct === false) {
        featuredProduct.update({ featuredProduct: true });
      }
      res.status(201).json(featuredProduct);
    } catch (err) {
      res.status(401).json({ error: err });
    };
  };

  //!! PUT

async function modifyProducts(req, res) {
    try {
      let { productsID } = req.params;
      let{ 
        name,
        category,
        img,
        sizes,
        numbersizes,
        boardsizes,
        description,
        price,
        material,
        activity,
        brand,
        model,

    }= req.body;
      const modifyProduct = await Products.findOne({
        where: {
            productsID: productsID
        }
      });
  
      if (modifyProduct) {
        modifyProduct.update({
            name,
            category,
            img,
            sizes,
            numbersizes,
            boardsizes,
            description,
            price,
            material,
            activity,
            brand,
            model,
        });
  
        res.status(201).json(modifyProduct);
        
      } else {
        res.status(404).json({ msg: "Product not found" });
        
      }
    } catch (err) {
      res.status(401).json({ error: err });
    };
  
  };

  //!! DELETE

const deleteProducts = async (req, res) => {
    try {
      let { productsID } = req.params;
      Products.destroy({
        where: {
            productsID: productsID
        }
      })
  
      res.status(201).json({ message: "Products deleted" });
    } catch (err) {
      res.status(401).json({ error: err });
    };
  };



module.exports = {
    getProductsByCategory,
    getAllProducts,
    getProductsById,
    getProductsByBrand,
    postNewProducts,
    disableProducts,
    featuredProducts,
    modifyProducts,
    deleteProducts,
  };
  