#!/usr/bin/env node

const pkg = require('../package.json');
const cra = require('./cra');

if (process.argv.length < 3) {
  cra.usage();
  process.exit(1);
}

const args = process.argv;
args.shift();
args.shift();
const [type, name] = args;

if (!type) {
  cra.usage();
  process.exit(1);
}

if (!name) {
  cra.usage();
  process.exit(1);
}

cra.generate(type, name);
