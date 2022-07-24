const { Router } = require('express');

router = Router();

router.get('/', (req, res) => {
  res.render('teachers/index');
});
