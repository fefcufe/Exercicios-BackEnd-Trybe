const express = require('express');
const service = require('../services/booksService');

const getAll = async ( _req, res) => {
  try {
    const allBooks = await service.getAll();
    return res.status(200).json(allBooks);
  }
  catch (e) {
      return res.status(500).json({ message: e.message});
  };
};

module.exports ={
    getAll,
}