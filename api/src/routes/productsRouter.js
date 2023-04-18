const {Router} = require('express');
const {getAllProducts,getProductsByCategory,getProductsByBrand,getProductsById,postNewProducts,featuredProducts,deleteProducts,modifyProducts,disableProducts,controlStock} = require('../controllers/productsControllers');

const router = Router();

router.get('/', getAllProducts)
router.get('/category/:access', getProductsByCategory);
router.get('/brand/:access', getProductsByBrand);

router.get('/:id', getProductsById);



router.post('/create', postNewProducts);

router.put('/disable/:productsID',disableProducts)
router.put('/featured/:productsID',featuredProducts)
router.put('/modify/:productsID',modifyProducts)
router.put('/modify/stock/:productsID',controlStock)

router.delete('/delete/:productsID', deleteProducts)



module.exports = router;