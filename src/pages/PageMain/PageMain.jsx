import { Link } from "react-router-dom"
import Header from "../../components/Header/Header";

export default function PageMain() {
    return (
        <div>
            <Header />
            <main className="brules">
                <p>Правила игры:</p>
                <ol className="rules">
                    <li>Прваило 1</li>
                    <li>Прваило 2</li>
                    <li>Прваило 3</li>
                </ol>
                <Link to="/game">Начать играть</Link>
            </main>
            {/* <footer>
                <p>&copy; Мухина Юлия, 2026 г.</p>
            </footer> */}
        </div>
    );
}