
require('dotenv').config();
const { Client } = require('pg');

async function dropAllTables() {
    const dbConfig = {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        user: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'postgres',
    };

    const client = new Client(dbConfig);

    try {
        await client.connect();
        console.log('Connected to database for cleanup...');

        // Drop all tables in public schema
        await client.query('DROP SCHEMA public CASCADE;');
        await client.query('CREATE SCHEMA public;');

        console.log('✅ All tables dropped successfully!');

    } catch (err) {
        console.error('❌ Failed to drop tables:', err.message);
    } finally {
        await client.end();
    }
}

dropAllTables();
