const comp = require('models/Compounding1');


exports.addData = async (ctx) =>{
    console.log(ctx.request.body);
    var data = ctx.request.body;
    ctx.body = await comp.newData(data);
};

exports.findData = async(ctx)=>{
    console.log(ctx.request.body);
    if(ctx.request.body.meltTemp==null){
        console.log("error");
    }
    var data = await comp.findDataByAll(ctx.request.body);
    ctx.body = data;
}