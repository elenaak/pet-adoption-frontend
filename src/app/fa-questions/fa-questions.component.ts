import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fa-questions',
  templateUrl: './fa-questions.component.html',
  styleUrls: ['./fa-questions.component.css']
})
export class FaQuestionsComponent implements OnInit {
  listOfQuestions=new Array<Question>();
  questionActive:Question;
  answer:string;
  constructor() { }
  view_tab='tab1';
  ngOnInit(): void {
    this.fillQuestionList();
    this.questionActive=this.listOfQuestions[0];
    this.answer=this.listOfQuestions[0].answer;
    this.listOfQuestions[0].isActive=true;
    console.log(this.answer)
  }
  isActive(item) {
    return this.questionActive === item;
};
  openQuestion(selectedQuestion:Question){
    this.answer=selectedQuestion.answer;
    this.questionActive=selectedQuestion;
  }
  fillQuestionList(){
    this.listOfQuestions.push(new Question(
    'How Do I Search For a Pet?',
    'To find an adoptable pet, you can begin your search using “Find a Pet” located above. Since PetFriends is updated regularly, we recommend that you keep checking back or sign up for our newsletter to be notified when new pets matching your criteria are added to the site.'));
    this.listOfQuestions.push(new Question(
    'Is the Pet I See on PetFriends Still Adoptable?',
    'Each user is responsible for updating adoptable pet listings. To learn about a specific pet, please contact the user directly'));
    this.listOfQuestions.push(new Question(
    'How Often is PetFriends Updated?',
    'Because each user is responsible for keeping its adoptable pet listings current, PetFriends is continuously updated.'));
    this.listOfQuestions.push(new Question(
    'How Do I Adopt a Pet I See On PetFriends?',
    'Each user using our site has its own adoption policies and procedures and solely handles its own pet adoptions. To adopt a pet you see listed on PetFriends, please click the “Ask About” button on the pet’s profile. You will then be given the user\'s contact information and, if an email is available for that user.'));
    this.listOfQuestions.push(new Question(
    'How Do I Meet a Pet I See on PetFriends?',
    'Once you find a pet you’re interested in adopting, you’ll probably want to meet him or her. Go to the Pet Profile page by clicking on the pet’s picture or name on a search results page. This takes you to the pet’s detail page. Click “Ask About” to directly contact the user to inquire further.'));
    this.listOfQuestions.push(new Question(
    'How Will I Know If I’ve Been Approved to Adopt a Pet?',
    'After submitting an adoption inquiry, the user with the pet you’re interested in will contact you. You may also reach out to the user directly to follow up.'));
    this.listOfQuestions.push(new Question(
    'How Long Will It Take to Hear Back from the Adoption Group?',
    'Each user is a little bit different. Some days you might send in an inquiry and get a response within a few minutes and other users may take a few days or a week.'));
    this.listOfQuestions.push(new Question(
    'What Are The Requirements For Adopting A Pet?',
    'Each user that lists its pets on PetFriends has its own rules and requirements for adopting pets. If you’re interested in a specific pet, please reach out to the user that created the pet listing to find out what their policies are.'));
    this.listOfQuestions.push(new Question(
    'Can I Adopt a Pet Who’s Out of State?',
    'Each user that lists its pets on PetFriends has its own rules and requirements for adopting out pets. PetFriends doesn’t dictate any adoption policy, including adoption requirements and whether out-of-state adoptions are allowed. If you’re interested in a specific pet, please reach out to the user that has that pet.'));
    this.listOfQuestions.push(new Question(
    'Will There Be An Adoption Fee?',
    'Petfinder doesn’t dictate any adoption policy, including adoption requirements and fees. If you’re interested in a specific pet, please contact the user that created the pet listing through the Pet Profile page.'));
    this.listOfQuestions.push(new Question(
    'Why Wasn’t I Selected to Adopt?',
    'Each user has its own adoption process. We do not dictate adoption procedures to our PetFriends members, although we do encourage them to do everything possible to facilitate finding good homes for their adoptable pets. We hope you won’t let this one experience change your mind about providing a loving home to a pet in need.'));
    this.listOfQuestions.push(new Question(
    'How Can I Tell If a Rescue Group is Real or a Scam?',
    'All the users that list their pets on PetFriends have been carefully screened by our staff. If you have concerns about a shelter or rescue group listed on PetFriends, please contact us'));
    this.listOfQuestions.push(new Question(
    'How Do I Make a Complaint About a Shelter or Rescue Group?',
    'All of the users on our site undergo an application and screening process prior to being able to post their group’s adoptable pets. If you have concerns about a particular user posting on our site, you are welcome to contact us.'));
  }

}
class Question{
  question:string;
  answer:string;
  isActive:boolean;
  constructor(question:string,answer:string){
    this.question=question;
    this.answer=answer;
    this.isActive=false;
  }
}
