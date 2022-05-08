import {createCommand} from "commander";

module.exports = createCommand('info')
  .description('rnaudah is so ...')
  .action(() => {
    console.log(`Im rnaudah. I want to be a programmer.\nhttps://rnaudah.me`)
  })