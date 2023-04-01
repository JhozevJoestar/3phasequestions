class Rabbit extends Animal {
    constructor(name) {
      super(name);
      this.created = Date.now();
    }
  }