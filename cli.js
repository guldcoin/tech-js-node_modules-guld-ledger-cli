#!/usr/bin/env node
const program = require('commander')
const VERSION = require('./package.json').version
const { cache } = require('guld-ledger') /* , balance */

/* eslint-disable no-console */
program
  .name('guld-ledger')
  .version(VERSION)
  .description('Guld ledger')
  .option('-u --user <name>', 'The user name to run as.', (n) => {
    if (n) process.env.GULDNAME = global.GULDNAME = n
    return true
  })
/*
  .command('balance [file] [query]')
  .alias('bal')
  .description('Reports the current balance of all accounts matching the query.')
  .action(async function (file = cache.LEDGERPATH, query, options) {
    balance(file).then(console.log).catch(e => {
      console.error(e)
      process.exit(1)
    })
  })
program
*/
  .command('cache [path]')
  .description('Cache all ledger files found (recursively) in the given path or $HOME/ledger.')
  .action(async function (p = cache.LEDGERDIR, options) {
    cache.includeJournal(p).then(console.log('Ok.')).catch(e => {
      console.error(e)
      process.exit(1)
    })
  })
/* eslint-enable no-console */

program.parse(process.argv)
