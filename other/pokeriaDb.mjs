import sqlite from 'sqlite3';

const db = new sqlite.Database('pokeriaDb.sqlite', 
    (err) => {if (err) throw err; });

let sql = `CREATE TABLE Orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    numOfBowls INTEGER,
    textInput REAL )`;

db.run(sql, (err) => {if (err) throw err; });
