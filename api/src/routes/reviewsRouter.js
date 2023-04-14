const {Router} = require('express');
const {getAllReviews,postReviews,getReviewsById,disableReviews,} = require('../controllers/reviewsControllers');

const router = Router();
router.get('/', getAllReviews)
router.get('/:id', getReviewsById)

router.put('/disable/:idReviews', disableReviews)


router.post('/create', postReviews)


module.exports = router;