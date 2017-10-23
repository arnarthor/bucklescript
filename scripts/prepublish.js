//@ts-check
var p = require('child_process')
var path = require('path')
var fs = require('fs')
var root = path.join(__dirname, '..')
var root_config = { cwd: root, encoding: 'utf8' }
var json = require(path.join(root, 'package.json'))

p.execSync(`git clean -dfx .`, root_config)
console.log(`start packing`)
p.execSync(`npm pack`, root_config)
console.log(`finish packing`)

var tmpdir = 'tmp'

fs.mkdirSync(path.join(root, tmpdir))

p.execSync(`tar -xzf ${json.name}-${json.version}.tgz -C ${tmpdir} `, root_config)

process.env.BS_ALWAYS_BUILD_YOUR_COMPILER= 'true'
var tmpdir_config = {
    cwd: path.join(root, tmpdir,'package'),
    encoding: 'utf8', stdio: 'inherit'    
}
console.log(`start installing`)
p.execSync(`npm install`, tmpdir_config)
console.log(`finish installing`)
