class Animal {
    constructor(type) {
        this.type = type;
    }

    sleep() {
        console.log('animal', this.type, 'is sleeping');
    }
}

function walk() {
    console.log('I am walking');
}

export {Animal, walk}