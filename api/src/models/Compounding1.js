const mongoose = require('mongoose');
const { Schema } = mongoose;


const Compounding1 = new Schema({
    polyState:String,//고분자 상태
    mixRatio:Number, //섞는 비율
    extSpinspeed:Number, //압출기 회전속도
    extDiameter:Number, //압출기 지름
    extTemp:Number, //압출기 온도
    
    meltTemp:Number,//녹는점
    stikic:Number, //접착력
    tenStrength:Number, //인장강도
    
    used:{type:Number,default:0} //사용횟수
});

Compounding1.statics.useThis = function({_id}){
    return this.findOne({_id},function(err,res){
        res.updateOne({$set: {used: res.used+1}}).clone().exec();
    }).clone().exec();
}

Compounding1.statics.findData = function({polyState,mixRatio,extSpinspeed,extDiameter,extTemp,meltTemp,stikic,tenStrength}){ // 신청 문서 생성
    return this.find({polyState,mixRatio,extSpinspeed,extDiameter,extTemp,meltTemp,stikic,tenStrength});
};

Compounding1.statics.newData = function({polyState,mixRatio,extSpinspeed,extDiameter,extTemp,meltTemp,stikic,tenStrength}){ // 신청 문서 생성
    const data = new this({polyState,mixRatio,extSpinspeed,extDiameter,extTemp,meltTemp,stikic,tenStrength});
    return data.save();
};

Compounding1.statics.findDataByAll = function({meltTempma,meltTempmi,stikicma,stikicmi,tenStrengthma,tenStrengthmi}){
    return this.find({"meltTemp":{$lte:meltTempma,$gte:meltTempmi},"stikic":{$lte:stikicma,$gte:stikicmi},"tenStrength":{$lte:tenStrengthma,$gte:tenStrengthmi}}).exec();
};
Compounding1.statics.findMaxM = function(){
    return this.find({"meltTemp":{$gte:0}},{"meltTemp":true,"_id":false}).sort({"meltTemp":-1}).limit(1).exec();
};
Compounding1.statics.findMinM = function(){
    return this.find({"meltTemp":{$gte:0}},{"meltTemp":true,"_id":false}).sort({"meltTemp":1}).limit(1).exec();
};
Compounding1.statics.findMaxS = function(){
    return this.find({"stikic":{$gte:0}},{"stikic":true,"_id":false}).sort({"stikic":-1}).limit(1).exec();
};
Compounding1.statics.findMinS = function(){
    return this.find({"stikic":{$gte:0}},{"stikic":true,"_id":false}).sort({"stikic":1}).limit(1).exec();
};
Compounding1.statics.findMaxT = function(){
    return this.find({"tenStrength":{$gte:0}},{"tenStrength":true,"_id":false}).sort({"tenStrength":-1}).limit(1).exec();
};
Compounding1.statics.findMinT = function(){
    return this.find({"tenStrength":{$gte:0}},{"tenStrength":true,"_id":false}).sort({"tenStrength":1}).limit(1).exec();
};

// 스키마를 모델로 변환하여, 내보내기 합니다.
module.exports = mongoose.model('Compounding1', Compounding1);