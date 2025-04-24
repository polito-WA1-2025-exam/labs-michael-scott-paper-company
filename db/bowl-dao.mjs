import sqlite from 'sqlite3';
import Bowl from '../models/bowl.mjs';
import db from './myDb.mjs';

/* add a new bowl */
export const addBowl = async bowl => {
    const sql = 'INSERT INTO bowls (size, base, proteins, ingredients) VALUES (?, ?, ?, ?)';
    
    return new Promise((resolve, reject) => {
        db.run(sql, [bowl.size, bowl.base, bowl.proteins, bowl.ingredients], function(err) {
            if (err) reject(err);
            else resolve(this.lastID);
        });
    });
};
