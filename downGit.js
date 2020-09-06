// git包
const downLoad = require('download-git-repo')
// 动画
const ora = require('ora')

const url = 'zhou1591/zjs-template'
const clone = false
const downGit = (name) => {
  const spinner = ora('正在拉取模板...')
  spinner.start()
  downLoad(url, name, {
    clone
  }, err => {
    spinner.stop()
    console.log(err || '项目创建成功')
    process.exit(1)
  })
}
module.exports = downGit
