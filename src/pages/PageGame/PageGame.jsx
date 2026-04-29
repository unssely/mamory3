import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import useGame from "../../components/useGame";

import data from '../../data.json'
import { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";

export default function PageGame()
{
    const [images, setImages] = useState([]);
    useEffect(()=>{
      setImages(data.sort(() => Math.random() - 0.5));
    },[]);
 
   
    const {
        finishedItems,
        stepsCount,
        isWin,
        handleReset,
        checkItems} = useGame(images); //импортируем с деструктуризацией
    
    const handleBtnReset = () => {
      handleReset();
      //перемешаем массив
      images.sort(() => Math.random() - 0.5)
    } 
 
    return (
        <>
          <Header />
          <div className='container'>
          <main>      
            <div className="steps">{stepsCount}</div>

            <Grid 
              images = {images}
              finishedItems = {finishedItems}
              checkItems = {checkItems}            
            />   

            {
              isWin && (
                <Modal>
                  <h3 className="modal-caption">Победа!</h3>
                  <p className="modal-description">
                    Вы собрали все пары за {stepsCount} шагов
                  </p>
                  <button 
                    className="button modal-button"
                    onClick={handleBtnReset}
                    type="button"
                  >
                    Новая игра
                  </button>
                </Modal>
              )
            } 
          </main>
          
        </div>
        {/* <footer>
            <p>&copy; Шушарина Юлия, 2026 г.</p>
          </footer> */}
        </>
      )
}