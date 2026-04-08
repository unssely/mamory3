import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import Header from "../../components/Header/Header";
import useGame from "../../components/useGame";

import images from '../../data.json'
import { useEffect } from "react";
import Modal from "../../components/Modal/Modal";

export default function PageGame()
{
   
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
        <div className='container'>
          <Header />
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
          <footer>
            <p>&copy; Мухина Юлия, 2026 г.</p>
          </footer>
        </div>
      )
}