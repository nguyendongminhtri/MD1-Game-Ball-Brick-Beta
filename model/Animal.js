class Animal {
    name;
    color;
    say;

    constructor(name, color, say) {
        this.name = name;
        this.color = color;
        this.say = say;
    }
    setSay(say){
        this.say = say;
    }
    getSay(){
        return this.say;
    }
}
