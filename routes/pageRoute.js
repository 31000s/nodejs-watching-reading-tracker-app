const express = require('express');
const router = express.Router();
const PagesControllers = require('../controllers/PagesControllers');
const PagesIdControllers = require('../controllers/PagesIdControllers');
const AddControllers = require('../controllers/AddControllers');
const EditControllers = require('../controllers/EditControllers');
const UploadControllers = require('../controllers/UploadControllers');
const DeleteControllers = require('../controllers/DeleteControllers');

//PAGES
router.route('/').get(PagesControllers.indexPage);
router.route('/serie').get(PagesControllers.seriePage);
router.route('/movie').get(PagesControllers.moviePage)
router.route('/book').get(PagesControllers.bookPage);
router.route('/add').get(PagesControllers.addPage);
//:SLUG
router.route('/serie/:slug').get(PagesIdControllers.seriePage);
router.route('/movie/:slug').get(PagesIdControllers.moviePage);
router.route('/book/:slug').get(PagesIdControllers.bookPage);
//DELETE
router.route('/serie/:slug').delete(DeleteControllers.serieDelete);
router.route('/movie/:slug').delete(DeleteControllers.movieDelete);
router.route('/book/:slug').delete(DeleteControllers.bookDelete);
//Upload
router.route('/series').post(UploadControllers.seriesUpload);
router.route('/movies').post(UploadControllers.moviesUpload);
router.route('/books').post(UploadControllers.booksUpload);
//Add
router.route('/movies').post(AddControllers.moviesAdd);
router.route('/series').post(AddControllers.seriesAdd);
router.route('/books').post(AddControllers.booksAdd);
//Edit
router.route('/movie/edit/:slug').get(EditControllers.movieEdit);
router.route('/movie/:slug').put(EditControllers.moviePage);
router.route('/serie/edit/:slug').get(EditControllers.serieEdit);
router.route('/serie/:slug').put(EditControllers.seriePage);
router.route('/book/edit/:slug').get(EditControllers.bookEdit);
router.route('/book/:slug').put(EditControllers.bookPage);

module.exports = router;
