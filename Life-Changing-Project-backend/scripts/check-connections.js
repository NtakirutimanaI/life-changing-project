
require('dotenv').config();
const { Client } = require('pg');
const cloudinary = require('cloudinary').v2;

async function checkConnections() {
    console.log('--- Checking Connections ---');

    // 1. Check Database
    const dbConfig = {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        user: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'postgres',
    };

    console.log(`Testing Database Connection to ${dbConfig.host}:${dbConfig.port}/${dbConfig.database}...`);

    const client = new Client(dbConfig);
    let dbConnected = false;

    try {
        await client.connect();
        console.log('✅ Database Connected Successfully!');
        dbConnected = true;

        const res = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);

        console.log(`Current Tables (${res.rows.length}):`);
        res.rows.forEach(row => console.log(` - ${row.table_name}`));

    } catch (err) {
        console.error('❌ Database Connection Failed:', err.message);
    } finally {
        if (dbConnected) await client.end();
    }

    // 2. Check Cloudinary
    console.log('\nTesting Cloudinary Connection...');
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    try {
        const result = await cloudinary.api.ping();
        console.log('✅ Cloudinary Connected Successfully!', result);
    } catch (err) {
        console.error('❌ Cloudinary Connection Failed:', err.message);
    }
}

checkConnections();
