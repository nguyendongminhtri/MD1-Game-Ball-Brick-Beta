class Cat extends Animal {
    eat;

    constructor(name, color, say, eat) {
        super(name, color, say);
        this.eat = eat;
    }
    setEat(eat){
        this.eat = eat;
    }
    getEat(){
        return this.eat;
    }
}
