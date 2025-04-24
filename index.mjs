// In index.mjs, instanzi un oggetto di tipo FilmDao:
//      const userDao = new UserDao();
//      
//      e in seguito definire le route come 
//       
//      app.get('/api/films',
//     (req, res) => {
//         // get films that match optional filter in the query
//         filmDao.getFilms(req.query.filter)
//             // NOTE: "invalid dates" (i.e., missing dates) are set to null during JSON serialization
//             .then(films => res.json(films))
//             .catch((err) => res.status(500).json(err)); // always return a json and an error message
//     }
// );
// "



import express from 'express';
import morgan from 'morgan';
import Bowl from './models/bowl.mjs';

import { addBowl } from "./db/bowl-dao.mjs";

const app = express();

// add some middlewares
app.use(morgan('dev')); // log HTTP requests
app.use(express.json()); 

app.get('/', (req, res) => res.status(200).send("Hello my brother, how are you today??"));

// Endpoint per aggiungere un nuovo bowl
app.post('/add-bowl', async (req, res) => {
  const { size, base, proteins, ingredients } = req.body;

  const proteinsJson = JSON.stringify(proteins);
  const ingredientsJson = JSON.stringify(ingredients);

  const bowl = new Bowl(undefined, size, base, proteinsJson, ingredientsJson); 
  
  { size, base, proteins, ingredients };

  try {
    const lastID = await addBowl(bowl);  // Chiamata alla funzione addBowl
    res.status(201).json({ message: 'Bowl aggiunto con successo!', lastID });
  } catch (err) {
    res.status(500).json({ message: 'Errore nell\'aggiungere il bowl', error: err.message });
  }

});


// activate server
app.listen(3000, () => console.log("Server in ascolto sulla porta 3000!"));


