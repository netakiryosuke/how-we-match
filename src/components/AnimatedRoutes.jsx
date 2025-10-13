import { Route, Routes, useLocation } from "react-router-dom";
import QuestionPage from "./QuestionPage";
import Result from "./Result";
import { AnimatePresence, motion } from "framer-motion";
import TopPage from "./TopPage";

export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <TopPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/question"
                    element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2 }}
                        >
                            <QuestionPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/result"
                    element={
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 2 }}
                        >
                            <Result />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}
