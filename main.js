const cmd = require('commander')
const chalk = require('chalk')
const downGit = require('./downGit')

cmd.command('init').description('初始化模板').action(async (args) => {
  // 。。。
  console.log('args=', args)
})

// cmd.parse(process.argv)

// let url = 'zhou1591/zjs-template'
// // 然后第二个参数是拉取下来后的名称
// // 这里我选择用命令行里边传过来的参数做名字
// let  name = 'args'
// let downGit = (name) => {
//   downLoad(url, name, {
//           clone
//       }, err => {
//           process.exit(1)
//       })
//   }
