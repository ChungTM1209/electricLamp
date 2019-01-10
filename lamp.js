function Lamp() {
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;
    };
    this.light = function () {
        if (this.status){
            alert("Lighting");
        } else {
            alert("Not Lighting");
        }
    }
}
function SwitchButton(Lamp) {
    this.switchOn = function () {
        return Lamp.turnOn();
    };
    this.switchOff = function () {
        return Lamp.turnOff();
    };
}
var lamp1 = new Lamp();
var switchButton = new SwitchButton(lamp1);
function switchOn() {
    switchButton.switchOn();
    lamp1.light();
}
function switchOff() {
    switchButton.switchOff();
    lamp1.light();
}