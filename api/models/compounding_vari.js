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

Compounding1.statics.findDataByAll = function({meltTemp,stikic,tenStrength}){
    return this.find({meltTemp,stikic,tenStrength}).exec();
};
Compounding1.statics.findDataByM = function({meltTemp}){
    return this.find({meltTemp}).exec();
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