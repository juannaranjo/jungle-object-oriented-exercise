import Jungle from './src/jungle'
import Tiger from './src/animals/tiger'
import Monkey from './src/animals/monkey'


const tiger = new Tiger('grrrr', 30)
const monkey = new Monkey('ua ua ua', 50)
const tiger2 = new Tiger('grrrr', 45)
const monkey2 = new Monkey('ua ua ua', 60)
const tiger3 = new Tiger('grrrr', 5)
const monkey3 = new Monkey('ua ua ua', 0)

const jungle = new Jungle()

jungle.addAnimalToJungle(tiger)
jungle.addAnimalToJungle(monkey)
jungle.addAnimalToJungle(tiger2)
jungle.addAnimalToJungle(monkey2)
jungle.addAnimalToJungle(tiger3)
jungle.addAnimalToJungle(monkey3)

jungle.performRandomActivity()
jungle.performRandomActivity()
jungle.performRandomActivity()
jungle.performRandomActivity()
jungle.performRandomActivity()
jungle.performRandomActivity()
jungle.performRandomActivity()
jungle.performRandomActivity()
jungle.performRandomActivity()
jungle.performRandomActivity()
jungle.performRandomActivity()
