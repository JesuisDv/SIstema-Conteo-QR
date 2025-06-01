const express = require('express');
const db = require('./database');
const dayjs = require('dayjs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

function getTodayDate(){
    return dayjs().format('YYYY-MM-DD');
}

//Ingreso o Salida
app.post('/scan', (req, res) => {
    const { id } = req.body;
    const date = getTodayDate();

    db.get('SELECT * FROM people WHERE id = ? AND date = ?', [id, date], (err, row));
    if (err) return res.status(500).json({ error: err.mesage });

    if (!row) {
        //No hay entrada, registrar entrada
        const  entry_time = dayjs.js().format('HH:mm:ss');
        db.run('INSERT INTO people (id, entry_time, date) VALUES (?, ?, ?)', [id, entry_time, date]);
        return res.json({ status: 'Entrada: ', time: entry_time });
    } else if (!row.exit_time) {
        //Si ya hay registro, ahora sale
        const exit_time = daysjs().fortmat('HH:mm:ss');
        db.run('UPDATE people SET exit_time =' )
    }

})