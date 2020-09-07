#!/usr/bin/env node
const cmd = require('commander')
const downloadGitRepo = require('download-git-repo')
const chalk = require('chalk')
const ora = require('ora')
const inquirer = require('inquirer')

// 拉取git仓库
function downGit(repoUrl, projectName) {
  const spinner = ora('正在拉取模板...')
  spinner.start()
  downloadGitRepo(
    repoUrl,
    projectName,
    {
      clone: false
    },
    err => {
      spinner.stop()
      err ? console.log(chalk.red(err)) : console.log(chalk.green('Project download completed.'))
      process.exit(1)
    })
}

// 预设的一些选项
function someQuestions() {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          message: "Choose a template: ",
          name: "template",
          type: 'list',
          choices: [{
            name: 'iamwangkj/mp-template',
            value: 'iamwangkj/mp-template'
          }, {
            name: 'iamwangkj/react-parcel',
            value: 'iamwangkj/react-parcel'
          }],
          validate(val) {
            return val === '' ? 'Name is required!' : true
          }
        },
        {
          message: "Input your project name:",
          name: "projectName",
          type: 'input',
          validate(val) {
            return val === '' ? 'Project name is required!' : true
          }
        }
      ])
      .then(answers => {
        // 回调函数，answers 就是用户输入的内容，是个对象
        resolve(answers)
      })
  })

}

// 入口
async function main() {
  const ans = await someQuestions()
  console.log('ans=', ans)
  const { template, projectName } = ans
  downGit(template, projectName)

  // cmd
  //   .command('init', '初始化模板')
  //   .action(async (_cmd) => {
  //     const projectName = _cmd.args[0]
  //     await downGit(projectName)
  //   })
  // cmd.parse(process.argv)
}
main()