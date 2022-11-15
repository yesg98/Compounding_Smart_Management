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

// 스키마를 모델로 변환하여, 내보내기 합니다.
module.exports = mongoose.model('Compounding1', Compounding1);