import { useState } from "react"



export default function useGame(images){
    //список отгаданных карточек
    const [finishedItems, setFinishedItems] = useState([])
    //счетчик шагов
    const [stepsCount, setStepsCount] = useState(0)
    //функция сравнения двух открытых карточек
    const checkItems = (firstItem, secondItem) => {
        //находим первую кратинку в массиве
        const firstImage = images.find(({id}) => id == firstItem )
         //находим вторую кратинку в массиве
        const secondImage = images.find(({id}) => id == secondItem )
        
        if(firstImage.url == secondImage.url){ //если картинки одинаковы
            //добавляем отгаданные карточки в массив отгаданных карточек
            setFinishedItems((items)=>[...items, firstItem, secondItem])
        }
        //увеличиваем счетчик шагов на 1
        setStepsCount(stepsCount + 1)
    }
    //функция сброса игры
    const handleReset = () => {
        setFinishedItems([]) //очищаем массив с отгаданными карточками
        setStepsCount(0)  //обнуляем счетчик шагов
    }

    //проверка конца игры
    const isWin = finishedItems.length == images.length

    return {
        finishedItems,
        stepsCount,
        isWin,
        handleReset,
        checkItems
    }
}