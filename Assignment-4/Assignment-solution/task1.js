function hourFormatter(time) {
    let timeConst = time.slice(-2);
    let timeFormat = time.slice(0, -2).split(":");
    if (timeConst === "AM" && timeFormat[0] === "12") {
        timeFormat[0] = "00";
    } else if (timeConst === "PM") {
        timeFormat[0] = (timeFormat[0] % 12) + 12
    }  
    // document.getElementsByClassName('outputDate').value = timeFormat.join(":");
    // console.log(document.getElementsByClassName('outputDate').value);
    console.log("task1 ans is:",timeFormat.join(":"));
}
var time=prompt('Enter Time')
hourFormatter(time);