import { Button } from "react-native";
import { Animal, walk } from "./ExportImportTest";

class Human {
    constructor(name) {
        this.name = name;
    }

    sleep() {
        setTimeout(function() {
            console.log(this.name + " is sleep");
        }, 1000);
    }

    sleep1() {
        var self = this;
        setTimeout(function() {
            console.log(self.name + " is sleep");
        }, 1000);
    }

    sleep2() {
        setTimeout(function() {
            console.log(self.name + " is sleep");
        }.bind(this), 1000);
    }
}

var objFactory = (ver) => {
    return {modular: 'es6_' + ver};
}

function funOrderedInParam([x, y, z]) {
    return "ordered --> x:" + x + ", y:" + y + ", z:" + z;
}

var funUnorderInParam = ({x, y, z}) => {
    return "unordered --> x:" + x + ", y:" + y + ", z:" + z;
}

function say1(name) {
    var name = name || 'Jannnnnmes';
    console.log("hello " + name);
}

function say2(name = 'Lebran') {
    console.log("hello " + name);
}

function fnRest(x, y, z, ...rest) {
    console.log("rest -----> " + rest);
}

function* funAsync() {
    yield 'a';
    yield 'b';
    yield 'c';
    return 'ending';
}

var testFun = () => {
    console.log("test fun start2 --------");
    // var h = new Human("James");
    // h.sleep2();
    var o = objFactory("1.1")
    console.log("o --------" + o.modular);

    let num = Math.random();
    console.log("num -------- ${num}");

    let a = 1;
    let b = 2;
    console.log(a, b);
    [a, b] = [b, a];
    console.log(a, b);

    console.log("num -------- destucturing");
    
    let jsonData = {
        id: 100,
        title: "ok~~",
        data:[5, 6],
    };
    let {id, title, data:number} = jsonData;
    console.log(id, title, number);

    let orderedstr = funOrderedInParam([1, 2, 3]);

    console.log("num -------- param order " + orderedstr);
    console.log("num -------- param unorder" + funUnorderInParam({z: 1, y: 2, x: 3}));

    say1();
    say1("Kobe~~");

    say2();
    say2("Keivn");

    console.log("num ---------------------------- ");

    fnRest(1, 2, 3, 3, "a", "b");
    console.log(fnRest.length);
    console.log("num ---------------------------- ");

    let funAs = funAsync();
    console.log(funAs.next());
    console.log(funAs.next());
    console.log(funAs.next());
    console.log(funAs.next());

    let man = {name: 'James', age: 22};
    let handle = {
        set(receiver, prop, value) {
            console.log(prop, ' old value:', receiver[prop], ' is change to ', value);
            receiver[prop] = value;
        }
    }

    man = new Proxy(man, handle);

    man.name = 'Leo';

    man.age = '28';

    let dog = new Animal('dog');
    dog.sleep();

    let dogWalk = walk();

    console.log("test fun END --------");
    
};

export const ArrowMTest = () => {
    return (
        <Button title="=> test" onPress={() => testFun()} >

        </Button>
    );
}