class Tv {
    constructor(channelName, channelNumber, ChannelSound) {
        this.chennelName = channelName;
        this.channelNumber = channelNumber
        this.Channelsound = ChannelSound
    }
// encapsulation 
    #changedChannel() {
        return this.chennelName
    }
    // abstraction for tv
    connetChnnel(){
        return this.#changedChannel()
    }
}
class Remote extends Tv {
// absctraction
    changeChannel() {
        return this.connetChnnel()
    }
    AlterSound() {

    }
    Tvstwitch() {

    }
}
let press1 = new Remote("cha1", 1, 25)
console.log(press1.changeChannel());