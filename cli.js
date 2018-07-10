#!/usr/bin/env node
// eslint-disable-file no-console
const program = require('commander')
const VERSION = require('./package.json').version

program
  .name('guld-ledger')
  .version(VERSION)
  .description('Guld ledger')
  .option('-u --user <name>', 'The user name to run as.', (n) => {
    if (n) process.env.GULDNAME = global.GULDNAME = n
    return true
  })
  // .option('-q, --quiet', '')
  .command('source [file]', 'Parse a journal file and checks it for errors.  ledger will return success if no errors are found.')
//  .command('source [file]', 'Parse a journal file and checks it for errors.  ledger will return success if no errors are found.')

program.parse(process.argv)
