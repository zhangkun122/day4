module.exports={
    lintOnSave:false,
    devServer:{
        before:app=>{
            app.get('/list',function(req,res){
                let data=require('./src/mock/mock.json')
                res.send(data)
            })
        }
    }
}