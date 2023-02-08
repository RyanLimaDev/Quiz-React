// Componente pai do Card
import CardForm from "./CardForm"
import { useContext, useEffect } from "react"
import { QuizContext } from "../../context/quiz"
import AutoPlayer from "./CardAudio"
import MusicEasy from "../../sound/MusicEasy.mp3"
import MusicMedium from "../../sound/MusicMedium.mp3"
import MusicHard from "../../sound/MusicHard.mp3"

function QuizCard(){
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    return (
        <div className="card__quiz">
            <h1 className="card__title">{currentQuestion.title}</h1>

            <CardForm options={currentQuestion.options} answer={currentQuestion.answer}/>

            <h3 className="question__index">Questão {quizState.currentQuestion + 1}</h3>

            <h3 className="question__difficult">Dificuldade: {quizState.difficult}</h3>
            <AutoPlayer/>
        </div>
    )
}

export default QuizCard

