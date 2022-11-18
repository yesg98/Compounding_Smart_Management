const mongoose = require('mongoose');
const { Schema } = mongoose;


const Compounding1 = new Schema({
    polyState:String,
    mixRatio:Number,
    extSpinspeed:Number,
    extDiameter:Number,
    extTemp:Number,
    
    meltTemp:Number,
    stikic:Number,
    tenStrength:Number
});

Compounding1.statics.newData = function({polyState,mixRatio,extSpinspeed,extDiameter,extTemp,meltTemp,stikic,tenStrength}){ // 신청 문서 생성
    const data = new this({polyState,mixRatio,extSpinspeed,extDiameter,extTemp,meltTemp,stikic,tenStrength});
    return data.save();
};

Compounding1.statics.findDataByAll = function({meltTempma,meltTempmi,stikicma,stikicmi,tenStrengthma,tenStrengthmi}){
    return this.find({"meltTemp":{$lte:meltTempma,$gte:meltTempmi},"stikic":{$lte:stikicma,$gte:stikicmi},"tenStrength":{$lte:tenStrengthma,$gte:tenStrengthmi}}).exec();
};
Compounding1.statics.findMaxM = function(){
    return this.findOne({"meltTemp":{$gte:0}},{"meltTemp":true,"_id":false}).sort({"meltTemp":-1}).exec();
};
Compounding1.statics.findDataByS = function({stikic}){
    return this.find({stikic}).exec();
};
Compounding1.statics.findDataByT = function({tenStrength}){
    return this.find({tenStrength}).exec();
};
Compounding1.statics.findDataByMS = function({meltTemp,stikic}){
    return this.find({meltTemp,stikic}).exec();
};
Compounding1.statics.findDataByMT = function({meltTemp,tenStrength}){
    return this.find({meltTemp,tenStrength}).exec();
};
Compounding1.statics.findDataByST = function({stikic,tenStrength}){
    return this.find({stikic,tenStrength}).exec();
};

// 스키마를 모델로 변환하여, 내보내기 합니다.
module.exports = mongoose.model('Compounding1', Compounding1);