class GuessingGame {
    constructor() {}

    setRange(min, max) {
     this.a = min;
     this.b = max;
    }

    guess() {
          this.mid = Math.round((this.a+this.b)/2);
          return this.mid;
    }

    lower(){
        this.b = this.mid;
    }

    greater() {
       this.a = this.mid;
    }
}

module.exports = GuessingGame;
