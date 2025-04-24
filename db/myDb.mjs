import sqlite from 'sqlite3';

const db = new sqlite.Database('./db/pokeria.sqlite', 
    err => { if (err) throw err; }
); 




// db.close();

export default db;