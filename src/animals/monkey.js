import Animal from '../animal'

class Monkey extends Animal {
    constructor(sound, energyLevel){
        super(sound, energyLevel)
    }
    
    makeSound(){
        console.log('monkey Sound',super.sound)
        super.energyLevel -= 4
    }

    eatFood(type){
        console.log(`Monkey eating ${type}`)
        super.energyLevel += 2
    }

    play(){
        if(super.energyLevel < 8 ){
            console.log('I’m too tired')    
        }else {
            console.log('Oooo Oooo')
            super.energyLevel -= 8
        }
    }
}

export default Monkey
