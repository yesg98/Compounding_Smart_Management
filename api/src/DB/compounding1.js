const comp = require('models/Compounding1');


exports.addData = async (ctx) =>{
    console.log(ctx.request.body);
    var data = ctx.request.body;
    ctx.body = await comp.newData(data);
};

exports.findData = async(ctx)=>{
    var data = ctx.request.body;
    if(data.meltTempma==null){
        var maa = await comp.findMaxM();
        maa = maa[0];
        data.meltTempma = maa.meltTemp;  
    }
    if(data.meltTempmi==null){
        var num = await comp.findMinM();
        num = num[0];
        data.meltTempmi = num.meltTemp;
    }
    if(data.stikicma==null){
        var num = await comp.findMaxS();
        num = num[0];
        data.stikicma = num.stikic;
    }
    if(data.stikicmi==null){
        var num = await comp.findMinS();
        num = num[0];
        data.stikicmi = num.stikic;
    }
    if(data.tenStrengthma==null){
        var num = await comp.findMaxT();
        num = num[0];
        data.tenStrengthma = num.tenStrength;
    }
    if(data.tenStrengthmi==null){
        var num = await comp.findMinT();
        num = num[0];
        data.tenStrengthmi = num.tenStrength;
    }
    var data = await comp.findDataByAll(ctx.request.body);
    ctx.body = data;
}

exports.useThis = async(ctx)=>{
    var data = ctx.request.body;
    await comp.useThis(data._id);
}