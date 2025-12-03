const readlineSync = require('readline-sync');

class Player{
    constructor(hp=20,attackPower=4){
        this.hp = hp;
        this.inventory = [];
        this.attackPower = attackPower;
    }
    Attack(target){
        target.hp -= this.attackPower;
        console.log(`${this} attacked ${target}`)
    }
    createInventory(){
        const Items = ['rock','knife','monsterEgg'];
        const RandomElement = Items[Math.floor(Math.random() * Items.lenght)];
        this.inventory.push(RandomElement);
    }
    showStatus(){
        console.log(`you have ${this.hp} hp`)
        console.log(`your inventory:${this.inventory}`)
    }
    
    
}

class Zombie extends Player{
    constructor(hp=10,attackPower=3){
        super(hp,attackPower);
    }
}

class Mutant extends Zombie{
    constructor(hp,attackPower){
        super(hp*1.5,attackPower+2);
    }
    StrongAttack(){
        target.hp -= this.attackPower+2;
    }
}

class Vampire extends Zombie{
    constructor(hp,attackPower){
        super(hp,attackPower);
    }
    Blood(target){
        const healAttack = 5;
        this.hp += healAttack;
        target.hp -= healAttack;
        console.log(`${this} got ${healAttack} points of your blood`)
    }
}


//making dungeon

class Dungeon{
    constructor(){
        this.size = Math.round(Math.random() * 5)
    };

}

class Cave extends Dungeon{
    constructor(){
        super();
        this.visibility = 80;
    }
}

let player = new Player();

while(true){
    const command = readlineSync.question('> ').trim().toLowerCase();
    if(command == 'exit'){
        console.log('bye');
        break;
    }
    switch(command){
        case 'go':
            console.log("her")
        case 'pick up':
            player.createInventory()
    }
}