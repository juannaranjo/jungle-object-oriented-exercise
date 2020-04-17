import Animal from '../animal'

class Tiger extends Animal {
    constructor(sound, energyLevel){
        super(sound, energyLevel)
    }

    sleep(){
        console.log('The tiger is sleeping zzzzzz')
        super.energyLevel += 5
    }

    eatFood(type){
        if(type === 'grain') {
            console.log('I can’t it that')
        }else {
            console.log(`Tiger eating ${type}`)
            this.energyLevel += 5
        }
    }
    
}

export default Tiger

