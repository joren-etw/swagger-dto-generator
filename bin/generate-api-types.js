#!/usr/bin/env node
import fs from 'fs';
import { generateFrontendApiTypes } from '../dist/index.js';

const file = process.argv[2];
if (!file) {
  console.error('Usage: generate-api-types <openapi.json> [outFile]');
  process.exit(1);
}

const outFile = process.argv[3];
const raw = fs.readFileSync(file, 'utf-8');
const document = JSON.parse(raw);

generateFrontendApiTypes(document, { outFile });
