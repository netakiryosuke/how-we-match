export default function calculateScore(answers) {
    const score = answers.reduce((sum, answer) => {
        if (answer === null) return sum;
        
        return sum + answer - 3
    }, 0);
    return score;
}
