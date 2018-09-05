#!/usr/bin/env node
const program = require('commander')
const path = require('path')
const home = require('user-home')
const { cacheJournal, setJournal } = require('guld-ledger-cache')
var { Account } = require('ledger-types')
const thispkg = require(`${__dirname}/package.json`)
const runCLI = require('guld-cli-run')

/* eslint-disable no-console */
program
  .name(thispkg.name.replace('-cli', ''))
  .version(thispkg.version)
  .description(thispkg.description)
  .option('-u --user <name>', 'The user name to run as.', (n) => {
    if (n) process.env.GULDNAME = global.GULDNAME = n
    return true
  })
  .command('balance [account] [...subaccounts]')
  .alias('bal')
  .description('Reports the current balance of all accounts matching the query.')
  .action(async function (account, subaccounts, options) {
    account = account || process.env.GULDNAME
    var file = path.join(home, 'ledger', 'equity.cache')
    var acct = Account.createFromEquity(await file.readFile(file, 'utf-8'))
    if (acct && acct.hasOwnProperty(account)) {
      console.log(acct[account])
    }
  })
program
  .command('cache [path]')
  .description('Cache all ledger files found (recursively) in the given path or $HOME/ledger.')
  .action(async function (p = path.join(home, 'ledger'), options) {
    await setJournal('')
    cacheJournal(p).then(console.log('Ok.')).catch(e => {
      console.error(e)
      process.exit(1)
    })
  })
/* eslint-enable no-console */
runCLI.bind(program)()
module.exports = program
