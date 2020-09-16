import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pet-finder-quiz',
  templateUrl: './pet-finder-quiz.component.html',
  styleUrls: ['./pet-finder-quiz.component.css']
})
export class PetFinderQuizComponent implements OnInit {
  numberOfAnswers: number = 0;
  buttonText: string = 'Next Question'
  question: string;
  answer: string = 'Doesn\'t matter';
  answerQuestion1: string;
  answerQuestion2: string;
  answerQuestion3: string;

  arrQuestionAnswers = new Array();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.question = "What is your favorite kind of pet?";
    this.arrQuestionAnswers.push(
      new CardItem('Doesn\'t matter', null), new CardItem('Dog', null),
      new CardItem('Cat', null), new CardItem('Other', null))
  }

  onSubmitQuizForm() {
    if (this.numberOfAnswers == 0) {
      if (this.answer != 'Doesn\'t matter') {
        this.answerQuestion1 = this.answer;
      }
      this.question = "And what about gender?";
      this.numberOfAnswers = 1;

      this.arrQuestionAnswers = new Array();
      this.arrQuestionAnswers.push(
        new CardItem('Doesn\'t matter', null), new CardItem('Male', null),
        new CardItem('Female', null));

      this.answer = "Doesn\'t matter"
    }
    else if (this.numberOfAnswers == 1) {
      if (this.answer != 'Doesn\'t matter') {
        this.answerQuestion2 = this.answer;
      }
      this.question = "How about the age of the pet?";
      this.numberOfAnswers = 2;
      this.arrQuestionAnswers = new Array();
      this.arrQuestionAnswers.push(
        new CardItem('Doesn\'t matter', 'Any age works for me!'), new CardItem('Baby', 'Cute but full-time!'),
        new CardItem('Young', 'Still learning'), new CardItem('Adult', 'Ready for love'),
        new CardItem('Senior', 'Great for first-time adopters'));

      this.answer = "Doesn\'t matter"

      this.buttonText = 'Finish'
    }
    else if (this.numberOfAnswers == 2) {
      if (this.answer != 'Doesn\'t matter') {
        this.answerQuestion3 = this.answer;
      }
      this.navigate();
    }
  }
  navigate() {
    this.router.navigate(['/pets'],
      {
        queryParams: {
          type: this.answerQuestion1, age: this.answerQuestion3,
          sex: this.answerQuestion2, page: 1
        }
      });
  }
}
class CardItem {
  title: string;
  content: string;
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}
