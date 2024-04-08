#!/usr/bin/env node

/**
 * This is a sample HTTP server.
 * Replace this with your implementation.
 */

import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import Path from 'node:path';
import { fileURLToPath } from 'node:url';

import { Config } from './config.js';

import 'dotenv/config';

const { resolve } = Path;
const nodePath = resolve(process.argv[1]);
const modulePath = resolve(fileURLToPath(import.meta.url));
const isCLI = nodePath === modulePath;

export default function main(port: number = Config.port) {
  const requestListener = (request: IncomingMessage, response: ServerResponse) => {
    response.setHeader('content-type', 'text/plain;charset=utf8');
    response.writeHead(200, 'OK');
    response.end(':)');
  };

  const server = createServer(requestListener);

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
