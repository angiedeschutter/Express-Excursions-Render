// DEPENDENCIES
const continents = require('express').Router()
const { supabase } = require('../supabase')


// FIND ALL DESTINATIONS ON SAME CONTINENT
continents.get('/:continent_name', async (req, res) => {
    try {
        let { data } = await supabase
        .from('destinations')
        .select('*')
        console.log(data)
        
    } catch (Error) {
        console.log(Error)
        res.status(500).send('Oh no, could not find destinations')
    }
    console.log(data)
})

// EXPORT
module.exports = continents