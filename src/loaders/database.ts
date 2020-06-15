import { Client } from 'pg';

const client: Client = new Client();

export default async () => {  
    await client.connect();

    return client;
}