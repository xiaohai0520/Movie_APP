const cors = require('cors');
const knex = require('knex');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use(require('./neo4j'));

// Example Route
app.post('/', (req, res) => {
    console.log(111111111111)
    const movie = req.body.movie;
    console.log(movie)
    // Create Driver session
    const session = req.driver.session();

    const data = {};
    // Run Cypher query
    const cypher1 = `MATCH (m:Movie) where m.name = "${movie}" RETURN m`;
    const cypher2 = `MATCH (m:Movie) where m.name = "${movie}" with m match (m:Movie)-[:actBy]-(a:Actor) RETURN a`;
    const cypher3 = `MATCH (m:Movie) where m.name = "${movie}" with m match (m:Movie)-[:directBy]-(d:Director) RETURN d`;

    const cypher4 = `MATCH (m:Movie) where m.name = "${movie}" with m match (m:Movie)-[:gen]-(g:Genre) RETURN g`;
    const cypher5 = `MATCH (m:Movie) where m.name = "${movie}" with m match (m:Movie)-[*1..2]-(m1:Movie) return distinct m1.name limit 5`;
    session.run(cypher1)
        .then(result => {
            // On result, get count from first record
            const m = result.records[0].get('m');
            console.log(m)
            // Send response
            //res.send(m.properties);
            data.name = m.properties.name
            data.year = m.properties.year
            data.budget = m.properties.budget
            data.score = m.properties.score
        })
        .catch(e => {
            // Output the error
            res.status(500).send(e);
        });

    session.run(cypher2).
        then(result => {
            const a0 = result.records[0].get('a');
            const a1 = result.records[1].get('a');
            console.log(a1);
            data.actor0 = a0.properties.name
            data.actor1 = a1.properties.name

        });
    session.run(cypher3).
        then(result => {
            const d = result.records[0].get('d');

            console.log(d);
            data.director = d.properties.name

        });
    session.run(cypher4).
        then(result => {
            const g = result.records[0].get('g');

            console.log(g);
            data.genre = g.properties.genre
            
        });
    session.run(cypher5).
        then(result => {
            
            const arr = []
            for (i = 0; i < 5; i++) {
                arr.push(result.records[i].get('m1.name'));
            }

            data.recoms = arr
            
            
            // data.genre = g.properties.genre
            res.send(data);
        }).catch(e => {
            // Output the error
            res.status(500).send(e);
        });
    






        

});


app.listen(8080, () => console.log('Listening on :8080'));



