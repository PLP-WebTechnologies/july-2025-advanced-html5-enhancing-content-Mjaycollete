const Bug = require('../models/Bug');
const validateBug = require('../utils/validateBug');

exports.createBug = async (req, res, next) => {
  try {
    const { isValid, errors } = validateBug(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }
    const bug = new Bug(req.body);
    const saved = await bug.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

exports.getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    next(err);
  }
};

exports.updateBug = async (req, res, next) => {
  try {
    const updated = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).send();
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteBug = async (req, res, next) => {
  try {
    const removed = await Bug.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).send();
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};
