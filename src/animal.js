class Animal {
    constructor(sound, energyLevel) {
        this._sound = sound 
        this._energyLevel = energyLevel
    }

    get sound() {
        return this._sound
    }

    get energyLevel() {
        return this._energyLevel
    }

    set energyLevel(energy) {
        this._energyLevel = energy
    }

    makeSound(){
        console.log('animalSound', this.sound)
        this._energyLevel -= 3
    }

    eatFood(type){
        console.log(`eating ${type}`)
        this._energyLevel += 5
    }

    sleep(){
        console.log('zzzzzzzzz')
        this._energyLevel += 10
    }
}

export default Animal 
