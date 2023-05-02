import { Injectable } from '@angular/core';
import { IQuestion } from '../models/iquestion';

@Injectable({ providedIn: 'root' })

export class QuizService 
{
  private questions: IQuestion[] = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'London', 'Paris', 'Madrid'],
      answer: 'Paris'
    },
    {
      question: 'What is the currency of Japan?',
      options: ['Dollar', 'Euro', 'Yen', 'Pound'],
      answer: 'Yen'
    },
    {
      question: 'Who is the current president of the United States?',
      options: ['Barack Obama', 'Donald Trump', 'Joe Biden', 'George W. Bush'],
      answer: 'Joe Biden'
    },
    {
      question: 'What is the tallest mammal on Earth?',
      options: ['Elephant', 'Giraffe', 'Hippopotamus', 'Rhino'],
      answer: 'Giraffe'
    },
    {
      question: 'What is the largest organ in the human body?',
      options: ['Heart', 'Brain', 'Liver', 'Skin'],
      answer: 'Skin'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars'
    },
    {
      question: 'What is the smallest country in the world?',
      options: ['Monaco', 'Vatican City', 'Maldives', 'Singapore'],
      answer: 'Vatican City'
    },
    {
      question: 'What is the largest ocean in the world?',
      options: ['Atlantic', 'Arctic', 'Indian', 'Pacific'],
      answer: 'Pacific'
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Salvador Dali'],
      answer: 'Leonardo da Vinci'
    },
    {
      question: 'Which language has the most native speakers in the world?',
      options: ['Spanish', 'English', 'Mandarin Chinese', 'Hindi'],
      answer: 'Mandarin Chinese'
    },
  ];

  constructor() { }

  getQuestions(): IQuestion[] { return this.questions; }
}
