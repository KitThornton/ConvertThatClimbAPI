// The routes for returning information from the DB for climbing grade conversions
let express = require('express');
let router = express.Router();
const pool = require("../DB.js");

// GET all the climbing grades with descriptions
router.get('/climbingGrades', async function(req, res) {
  try {
    const q = 'SELECT * FROM dbo.vwgradeswithdescription';
    const todos = await pool.query(q)
    res.json(todos);
    console.log("Retrieved all items from dbo.vwgradeswithdescription")

  } catch (err) {
    console.error(err.message);
  }
});

// GET all the climbing grades with descriptions
router.get('/grades/routeClimbing', async function(req, res) {
  try {
    const q = 'SELECT * FROM dbo.vwgradeswithdescription';
    const todos = await pool.query(q)
    res.json(todos);
    console.log("Retrieved all items from dbo.vwgradeswithdescription")

  } catch (err) {
    console.error(err.message);
  }
});

// GET all the climbing grades with descriptions
router.get('/grades/bouldering', async function(req, res) {
  try {
    const q = 'SELECT * FROM dbo.vwgradeswithdescription';
    const todos = await pool.query(q)
    res.json(todos);
    console.log("Retrieved all items from dbo.vwgradeswithdescription")

  } catch (err) {
    console.error(err.message);
  }
});

// GET all the expertise levels
router.get('/expertiseLevels', async function(req, res) {
  try {
    const q = 'SELECT * FROM dbo.ExpertiseLevel';
    const todos = await pool.query(q)
    res.json(todos);
    console.log("Retrieved all items from dbo.Grades")

  } catch (err) {
    console.error(err.message);
  }
});

// GET all the grading systems
router.get('/gradingSystems', async function(req, res) {
  try {
    const q = 'SELECT * FROM dbo.gradingSystems';
    const todos = await pool.query(q)
    res.json(todos);
    console.log("Retrieved all items from dbo.Grades")

  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
