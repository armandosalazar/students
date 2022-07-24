const { Router } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router = Router();

router.post('/register', async (req, res) => {
  const { names, lastnames, email, password, role } = req.body;
  const exist = await User.findOne({ email });
  if (exist) {
    return res.status(400).json({ msg: 'El usuario ya existe' });
  }

  const user = new User({
    names,
    lastnames,
    email,
    password: await User.encryptPassword(password),
    role,
  });
  const userCreated = await user.save();
  res.json(userCreated);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ msg: 'Correo invalido' });
  }

  const result = await User.comparePassword(password, user.password);
  if (!result) {
    return res.status(400).json({ msg: 'Contraseña incorrecta' });
  }

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '1m',
  });

  return res.json({ token });
});

router.post('/verify', async (req, res) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ msg: 'No autorizado' });
  }

  const token = authorization.split(' ')[1];

  try {
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ msg: 'Error Token' });
  }

  const user = await User.findById(decoded._id, { password: 0 });

  res.json({ auth: true, user });
});

module.exports = router;
