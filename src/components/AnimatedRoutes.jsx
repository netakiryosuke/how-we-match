import { Route, Routes } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import Result from "./Result";

export default function AnimatedRoutes() {
    
    return (
        <Routes>
            <Route path="/" element={<QuestionPage />} />
            <Route path="/result" element={<Result />} />
        </Routes>
    );
}
