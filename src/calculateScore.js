export default function calculateScore(answers) {
    const weights = [1, -2, -0.7, 0, 1.2, -1, -0.5, -2, -0.2, 0.8, -1.3, 1.2, 1, 1, 0.4, -1, 0.3, -1, 1, -1];

    const normalizedAnswers = answers.map((answer, i) => (answer - 3) * weights[i]);
    
    const score = normalizedAnswers.reduce((sum, normalizedAnswer) => sum + normalizedAnswer, 0);

    return Math.ceil(((score + 55.8) / 111.6 ) * 100) + 20;
}
