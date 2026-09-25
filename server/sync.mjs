import { createServer } from 'node:http';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const port = Number(process.env.SYNC_PORT || 8787);
const dataFile = join(process.cwd(), 'data', 'profiles.json');

const readProfiles = async () => { try { return JSON.parse(await readFile(dataFile, 'utf8')); } catch { return {}; } };
const send = (response, status, body) => { response.writeHead(status, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', 'Content-Type': 'application/json' }); response.end(JSON.stringify(body)); };

createServer(async (request, response) => {
  if (request.method === 'OPTIONS') return send(response, 204, {});
  const match = request.url?.match(/^\/profiles\/(.+)$/);
  if (!match) return send(response, 404, { error: 'Not found' });
  const email = decodeURIComponent(match[1]);
  const profiles = await readProfiles();
  if (request.method === 'GET') return profiles[email] ? send(response, 200, profiles[email]) : send(response, 404, { error: 'Profile not found' });
  if (request.method === 'PUT') {
    let body = '';
    for await (const chunk of request) body += chunk;
    profiles[email] = JSON.parse(body);
    await mkdir(dirname(dataFile), { recursive: true });
    await writeFile(dataFile, JSON.stringify(profiles, null, 2));
    return send(response, 200, profiles[email]);
  }
  return send(response, 405, { error: 'Method not allowed' });
}).listen(port, () => console.log(`Progress sync server: http://localhost:${port}`));