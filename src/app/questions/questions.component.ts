// Import necessary modules and classes
import { Component, OnInit } from '@angular/core';
import questionData from "../../app/questions.json";

// Define the component metadata
@Component({
  selector: 'app-questions', // Updated selector name
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'] // Add your styles if needed
})
export class QuestionsComponent implements OnInit {
  allQuestions: any[] = questionData;
  currentIndex = 0;
  currentQuestion: any = {};
  counter: number = 0;
  options: any[] = []; // Use an array to store selected options
  rightAnswer: number = 0;
  panelsts: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion() {
    const currentQuestionData = this.allQuestions[this.currentIndex];
    this.currentQuestion = currentQuestionData.question;
    this.options = new Array(currentQuestionData.options.length); // Initialize options array
    this.rightAnswer = 0; // Reset rightAnswer when loading a new question
  }

  selectOption(index: number, value: number) {
    this.options[index] = value;
  }

  nextQuestion() {
    if (this.counter < this.allQuestions.length - 1 && !this.panelsts) {
      this.counter++;
      this.currentIndex = this.counter;
      this.loadQuestion();
    }
  }

  prevQuestion() {
    if (this.counter > 0 && !this.panelsts) {
      this.counter--;
      this.currentIndex = this.counter;
      this.loadQuestion();
    }
  }

  finish() {
    this.panelsts = true;
    for (let i = 0; i <= this.counter; i++) {
      const selectedOption = this.options[i];
      if (selectedOption !== undefined && this.allQuestions[i].answer === selectedOption) {
        this.rightAnswer++;
      }
    }
  }
}
