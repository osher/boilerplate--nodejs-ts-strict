#!/usr/bin/env node
// eslint-disable-next-line simple-import-sort/imports

import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import Path from 'node:path';
import { fileURLToPath } from 'node:url';

import { Config } from './config.js';

const { resolve } = Path;
const nodePath = resolve(process.argv[1]);
const modulePath = resolve(fileURLToPath(import.meta.url));
const isCLI = nodePath === modulePath;

export default function main(port: number = Config.port) {
  const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    response.setHeader('content-type', 'text/plain;charset=utf8');
    response.writeHead(200, 'OK');
    response.end(':)');
  });

  if (isCLI) {
    server.listen(port);
    // eslint-disable-next-line no-console
    console.log(`Listening on port: ${port}`);
  }

  return server;
}

if (isCLI) {
  main();
}
