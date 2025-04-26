import db from '../../db/db.mjs';

export default function BowlDao() {

    /* add a new bowl */
    this.addBowl = (size, base, proteins, ingredients) => new Promise((resolve, reject) => {
        const sql = 'INSERT INTO bowls (size, base, proteins, ingredients) VALUES (?, ?, ?, ?);';

        db.run(sql, [size, base, proteins, ingredients], function(err) {
            if (err) { 
                reject(err);
            } else { 
                resolve(this.lastID);
            }
        });
    });

    /* get a bowl given its id */
    this.getBowl = id => new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM bowls WHERE id = ?;';

        db.get(sql, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });

    /* delete a bowl given its id */
    this.delBowl = id => new Promise((resolve, reject) => {
        const sql = 'DELETE FROM bowls WHERE id = ?;';

        db.run(sql, [id], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.changes);
            }
        });
    });
}
