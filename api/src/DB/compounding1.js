const comp = require('models/Compounding1');


exports.addData = async (ctx) =>{
    console.log(ctx.request.body);
    var data = ctx.request.body;
    ctx.body = await comp.newData(data);
};

exports.findData = async(ctx)=>{
    console.log(ctx.request.body);
    var data = ctx.request.body;
    if(data.meltTempma==null){
        data.meltTempma = await comp.findMaxM();
    }
    var data = await comp.findDataByAll(ctx.request.body);
    ctx.body = data;
}