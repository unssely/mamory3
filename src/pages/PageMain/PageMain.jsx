// import { Link } from "react-router-dom"
// import Header from "../../components/Header/Header";

// export default function PageMain() {
//     return (
//         <div>
//             <Header />
//             <main className="brules">
//                 <p>Правила игры:</p>
//                 <ol className="rules">
//                     <li>Прваило 1</li>
//                     <li>Прваило 2</li>
//                     <li>Прваило 3</li>
//                 </ol>
//                 <Link to="/game">Начать играть</Link>
//             </main>
//             {/* <footer>
//                 <p>&copy; Мухина Юлия, 2026 г.</p>
//             </footer> */}
//         </div>
//     );
// }

import { Link } from "react-router-dom"
import Header from "../../components/Header/Header";
import './PageMain.css';

export default function PageMain() {
    return (
        <div>
            <Header />
            <main className="main-content">
                <div className="rules-container">
                    <h2 className="rules-title">Правила игры:</h2>
                    <ol className="rules-list">
                        <li>Найдите все одинаковые пары карточек</li>
                        <li>Кликайте на карточки, чтобы открыть их</li>
                        <li>Выигрываете, когда все пары собраны</li>
                    </ol>
                    <Link to="/game" className="start-button">
                        Начать играть
                    </Link>
                </div>
            </main>
        </div>
    );
}
