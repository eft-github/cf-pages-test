import axios from 'axios';

export async function onRequestGet(context) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        return new Response(JSON.stringify(response.data), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response('Error in fetching data', { status: 500 });
    }
}