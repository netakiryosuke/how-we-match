import { useLocation } from "react-router-dom"

export default function Result() {
    const location = useLocation();

    const { score } = location.state;

    return (
        <div>
            <h2>あなたのスコアは {score} です</h2>
        </div>
    )
}
