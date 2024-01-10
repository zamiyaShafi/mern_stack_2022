const path=require("path")

function PathFunction(){
    console.log(`basename-${path.basename('C:\\temp\\myfile.html')}`)
    console.log(`dirname-${path.dirname('C:\\temp\\myfile.html')}`)
    console.log(`extname-${path.extname(__filename)}`)
    console.log(`extname-${path.extname('C:\\temp\\myfile.html')}`)

}
module.exports=PathFunction