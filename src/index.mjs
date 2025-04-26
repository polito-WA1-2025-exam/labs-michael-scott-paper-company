import express from 'express';
import morgan from 'morgan';

import BowlDao from './dao/bowl-dao.mjs';
import Bowl from './models/bowl.mjs'

const app = express();

app.use(express.json()); 
app.use(morgan('dev'));

app.get('/', (req, res) => res.status(200).send("Hello my brother, how are you today??"));

const bowlDao = new BowlDao();

app.post('/bowls', async (req, res) => {
  try {
    const { size, base, proteins, ingredients } = req.body;
    const bowl = new Bowl(undefined, size, base, proteins, ingredients);
    // TODO: validation
    const id = await bowlDao.addBowl(...bowl.toDbFormat());
    res.status(200).json({ message: "Bowl "+id+" added succesfully!" }); // TODO: check status value
  } catch (err) {
    res.status(200).json({ error: err.message }) // TODO: check status value
  }
});

app.get('/bowls/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // TODO: validation
    const row = await bowlDao.getBowl(id);
    if (row) {
      res.status(999).json({ message: "Bowl "+id+" retrieved successfully!", bowl: row }); // TODO: check status value
    } else {
      res.status(999).json({ message: "Bowl "+id+" doesn't exist!" }); // TODO: check status value
    }
  } catch (err) {
    res.status(200).json({ error: err.message }); // TODO: check status value
  }
});

app.delete('/bowls/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // TODO: validation
    const changes = await bowlDao.delBowl(id);

    if (changes) {
      res.status(999).json({ message: "Bowl "+id+" deleted succesfully!" }); // TODO: check status value
    } else {
      res.status(999).json({ message: "Bowl "+id+" doesn't exist!" }); // TODO: check status value
    }
    } catch (err) {
    res.status(999).json({ error: err.message }); // TODO: check status value
  }
});











app.listen(3000, () => console.log("Server in ascolto sulla porta 3000!"));

// TODO: dovrei chiudere qui il db? Se sì, quando?