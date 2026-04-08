import { useState } from 'react'
import Card from '../Card/Card'
import './Grid.css'

export default function Grid({images, finishedItems, checkItems}){
    //массив открытых карточек
    const [visibleItems, setVisibleItems] = useState([]) 
    //функция клика по карточке
    const handleCardClick = (id) => {
        //если карточка уже отгадана или открыта
        if(finishedItems.includes(id) || visibleItems.includes(id)){
            return //то завершаем выполнение функции
        }
        switch(visibleItems.length){
            case 0: //если не открыта ни одна карточка
                setVisibleItems([id])
                break
            case 1: //уже открыта одна карточка
                setVisibleItems((items) => [...items,id])
                checkItems(visibleItems[0], id)

                setTimeout(()=>{
                    setVisibleItems([]);
                }, 1000)

                break
            default: //если открыто уже две карточки
                setVisibleItems([])
        }
    }
    
    return (
        <div className='grid'>
           {
            images.map((item)=>(
                <Card 
                    url = {item.url} 
                    key = {item.id} 
                    id = {item.id}
                    isVisible = {visibleItems.includes(item.id)}
                    isFinished = {finishedItems.includes(item.id)}
                    onCardClick = {handleCardClick}
                />
            ))
           }
        </div>
    )
}



