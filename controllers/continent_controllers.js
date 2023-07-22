// DEPENDENCIES
const continents = require('express').Router()
const db = require('../models')
const { Destination } = db
const { createClient } =require('@supabase/supabase-js')

const DATABASE_URL = 'https://kzpuwykecupbyqdjibud.supabase.co'
const DATABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cHV3eWtlY3VwYnlxZGppYnVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4NTU3NjgsImV4cCI6MjAwNDQzMTc2OH0.oeGSvX55KS0rCby8Ip1ZdSn5rkkswIOZLVySftlpyqo"

const supabase = createClient(DATABASE_URL, DATABASE_KEY)



// FIND ALL DESTINATIONS ON SAME CONTINENT
continents.get('/:continent_name', async (req, res) => {
    try {
        let { data } = await supabase
        .from('destinations')
        .select()
        console.log(data)
        res.send(data)
        
    } catch (Error) {
        console.log(Error)
        res.status(500).send('Oh no, could not find destinations')
    }
    console.log(data)
})

// EXPORT
module.exports = continents