class Animal {
  private _species: string;

  constructor(species: string) {
    this._species = species;
  }


  get species(): string {
    return this._species;
  }

  
  makeSound(): void {
    console.log(`The ${this._species} makes a sound`);
  }



class Cat extends Animal {
  constructor() {
    super("cat");
  }

  purr(): void {
    console.log("purr");
  }
}

class Dog extends Animal {
  constructor() {
    super("dog");
  }

  bark(): void {
    console.log("woof");
  }
}
}