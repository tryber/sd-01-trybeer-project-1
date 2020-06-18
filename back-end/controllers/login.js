const express = require('express');

exports.login = async (_req, res) => {
  // const list = await model.Login();
  return res.status(200).json({ message: 'Olá.' });
};
