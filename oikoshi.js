let timeToHours= function(time){
    let [hour, minutes] = time.split(":");
    //   "8"   "00"       "8:00"
    hour = parseInt(hour);
    minutes = parseInt(minutes);
    return hour + minutes/60;
};

let hoursToTime = function (hoursFloat){
    let hours = Math.floor(hoursFloat);
    let minutes = (hoursFloat - hours)*60;
    return hours + ":" + Math.round(minutes);
};

let oikoshi = function(t1, v1, t2, v2){
    //console.log("before: ",t1,t2);
    t1 = timeToHours(t1);
    t2 = timeToHours(t2);
    //console.log("after: ",t1,t2);
    let dt = t2-t1;//太郎と二郎の出発時間差
    let dx = dt*v1;//二郎が出発した時の太郎の位置
    console.log(dx);
    let dv = v2-v1;
    let duration = dx/dv;
    let cathuptime = t2 + duration;
    console.log(cathuptime);
    let result = hoursToTime(cathuptime);
    console.log(result);
};


oikoshi("8:00", 3, "8:10", 5);
