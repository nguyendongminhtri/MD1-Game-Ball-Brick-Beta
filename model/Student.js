class Student {
    id; //properties
    name;
    age;
    address;
    // Alt + insert
    // constructor(id, name) {
    //     this.id = id;
    //     this.name = name;
    // }
    constructor(id, name, age, address) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
    }

    setId(id){
        this.id = id;
    }
    getId(){
        return this.id;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setAge(age){
        this.age = age;
    }
    getAge(){
        return this.age;
    }
    setAddress(address){
        this.address = address;
    }
    getAddress(){
        return this.address;
    }
    test(number1){
        return number1;
    }
    test(number1, number2){
        return number1+number2;
    }

}
