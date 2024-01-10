const os=require("os")




function osfunction(){
    console.log(`Hostname-${os.hostname}`)
    console.log(`Freememory-${os.freemem}`)
    console.log(`Platform-${os.platform}`)
    console.log(`Homedir-${os.homedir}`)
    console.log(`Release-${os.release}`)
}

module.exports=osfunction