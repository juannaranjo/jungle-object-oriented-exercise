import Monkey from './animals/monkey'

class Jungle {
    constructor() {
        this.animals = []
        this.typeOfFood = ['fish','grain','meat']
    }

    addAnimalToJungle(animal){
        this.animals.push(animal)
    }

    soundOff(){
        this.animals.forEach( animal => {
            animal.makeSound()
            console.log(`My level of energy is ${animal.energyLevel}`)
        })
    }

    performRandomActivity(){
        this.animals.forEach( animal => {
            let activity = 0

            if(animal instanceof  Monkey) {
                activity = this.randomNumber(1,5)
            }else{
                activity = this.randomNumber(1,4)
            }
            switch(activity){
                case 1 : 
                    animal.sleep()
                    break
                case 2 : 
                    animal.eatFood(this.typeOfFood[this.randomNumber(0,2)])  
                    break
                case 3 :
                    animal.makeSound()
                    break
                case 4 :
                    animal.play()
                    break
            }
        })
    }

    randomNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min
    }

}

export default Jungle 
