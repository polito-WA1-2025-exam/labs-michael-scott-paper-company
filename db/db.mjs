import sqlite from 'sqlite3';

const db = new sqlite.Database('./db/pokeria.sqlite', 
    err => { if (err) throw err; }
); 

export default db;