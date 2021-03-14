import {
  GiAllSeeingEye, 
  GiAlgae, 
  GiArmadillo, 
  GiBatMask, 
  GiAngularSpider, 
  GiAnglerFish, 
  GiBeaver,
  GiBuffaloHead
} from 'react-icons/gi'
import uniqid from 'uniqid'

export const cardArray = [
  {
    id: uniqid(),
    icon: <GiAlgae/>,
    text: 'Algae'
  },
  {
    id: uniqid(),
    icon: <GiAllSeeingEye/>,
    text: 'All Seeing Eye'
  },
  {
    id: uniqid(),
    icon: <GiArmadillo/>,
    text: 'Armadillo'
  },
  {
    id: uniqid(),
    icon: <GiBatMask/>,
    text: 'Batman'
  },
  {
    id: uniqid(),
    icon: <GiAngularSpider/>,
    text: 'Spider'
  },
  {
    id: uniqid(),
    icon: <GiAnglerFish/>,
    text: 'Angler Fish'
  },
  {
    id: uniqid(),
    icon: <GiBeaver/>,
    text: 'Beaver'
  },
  {
    id: uniqid(),
    icon: <GiBuffaloHead/>,
    text: 'Buffalo'
  },
]
