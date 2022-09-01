const Potion = require('./Potion');
const Character = require('./Character');
//const Character = require('./Character');

class Player extends Character {
    constructor(name = '') {
    
    super(name);
    

    this.inventory = [new Potion('health'), new Potion()];
    }    
//The player method will inherit the prototype methods from character
//Player.prototype = Object.create(Character.prototype);


    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility:this.agility
        };
    }
    // returns the inventory array or false if empty
    getInventory() {
        if(this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion) {
        this.inventory.push(potion);
    }

    //.splice() method removes items from an array and returns
    //the removed item(s) as a new array.
    usePotion(index) {
        const potion = this.getInventory().splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
}
module.exports = Player;