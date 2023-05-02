import { Component } from '@angular/core';
import { QuizService} from '../../services/quiz.service';
import { IQuestion } from '../../models/iquestion'

@Component
({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})

export class QuizComponent 
{
  quizStarted = false;
  quizFinished = false;
  currentQuestionIndex = 0;
  currentQuestion!: IQuestion;
  quizLength = 10;
  score = 0;
  correctAnswers = 0;
  incorrectAnswers = 0;
  answerSelected = false;
  secondsLeft: number = 0;
  minutesLeft: number = 0;
  timeLeft: number = 0;
  timer: any;
  timeTaken: string = "";

  constructor(private quizService: QuizService) {}

  ngOnInit() { this.startTimer(); }

  startQuiz() 
  {
    this.quizStarted = true;
    this.quizFinished = false;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.answerSelected = false;
    this.timeLeft = 0;
    this.getNextQuestion();
    this.startTimer();
  }

  getNextQuestion() { this.currentQuestion = this.quizService.getQuestions()[this.currentQuestionIndex]; }

  answerChanged(event: any) 
  {
    this.answerSelected = true;
    
    if (event.target.value === this.currentQuestion.answer) 
    {
      this.score++;
      this.correctAnswers++;
    } 
    else 
      this.incorrectAnswers++;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.answerSelected = false;

    if (this.currentQuestionIndex <= this.quizLength - 1) 
      this.getNextQuestion();
    else 
    {
      this.quizFinished = true;
      this.finishQuiz();
    }
  }

  startTimer() 
  {
    this.timer = setInterval(() => 
    {
      if (this.timeLeft < 600) 
      { 
        this.timeLeft++;
        this.minutesLeft = Math.floor(this.timeLeft / 60); 
        this.secondsLeft = this.timeLeft % 60;
      } 
      else 
        this.finishQuiz();
    }, 1000);
  }

  finishQuiz() 
  {
    clearInterval(this.timer);
    this.quizFinished = true;
    this.timeTaken = `${this.minutesLeft}:${this.secondsLeft < 10 ? '0' + this.secondsLeft : this.secondsLeft}`;
  }
}
