import { AfterContentInit, AfterViewInit, Component, ElementRef, HostBinding, Inject, inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { provideRouter, RouterLink, RouterOutlet  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { HighlightElementDirective } from './highlight-element.directive';
import { AppendTextPipe } from './append-text.pipe';
import { SortNumbersPipe } from './sort-numbers.pipe';
import { LetterCountPipe } from './letter-count.pipe';
import { SumOfNumbersPipe } from './sum-of-numbers.pipe';
import { EmployeeService } from './dependencies/employee.service';
import { ProductsComponent } from "./products/products.component";
import { CubeService } from './services/cube.service';
import { PowerService } from './services/power.service';
import { NotificationComponent } from "./notification/notification.component";
import { LogMessage1Service } from './services/log-message1.service';
import { LogMessage2Service } from './services/log-message2.service';
import { STR_MSG } from './dependencies/injection-token';
import { AdminDataService } from './services/admin-data.service';
import { ADMIN_DATA } from './ADMIN_DATA/admin-data';
import { AlertMessage1Service } from './services/alert-message1.service';
import { AlertMessage2Service } from './services/alert-message2.service';
import { MessageService } from './services/message.service';
import { AppConfigService } from './services/app-config.service';
import { AppUpdateService } from './services/app-update.service';
import { showGreetingMessage } from './dependencies/showGreeting';
import { FormsModule, NgForm, ReactiveFormsModule, FormControl, Validators, FormGroup, FormArray, Form, FormBuilder } from '@angular/forms';
import { upperCaseValidator } from './custom-validators/upperCase-validator';
import { AuthService } from './authentication/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, ReactiveFormsModule],
  providers: [CubeService, PowerService,AlertMessage1Service,AuthService,
            {provide: AlertMessage2Service, useExisting:AlertMessage1Service},
            {provide: 'LOG_MSG1', useClass:LogMessage1Service},//This is a string Type Token
            {provide: LogMessage2Service, useClass:LogMessage2Service},//This is a class Type Token
            {provide: 'STR_MSG', useValue: 'This is a value Type Token'}, //This is a value Type Token
            {provide: ADMIN_DATA, useValue: ADMIN_DATA}, //This is a object Type Token
            {provide: MessageService, useFactory: ()=> new MessageService},
            {provide: 'APP_UPDATE', useFactory: (configService: AppConfigService) =>
              configService.getAppConfig(),
              deps: [AppConfigService]
            },
            {provide: 'GREETING_MSG_FACTORY', useFactory: showGreetingMessage},// This is a factory function Type Token
            {provide: 'GREETING_MSG_VALUE', useValue: 'Hello, Angular!'},

            AppUpdateService,AdminDataService,
          ],
            templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
// inputValue: string= 'Hello';
// isDisabled: boolean = false;

// imgSrc: string = '/assets/Front.jpg';

// display(){
//   alert('Cliick event triggered');
//   console.log('Click event triggered');
// }

// display(msg: string) {
//   alert(msg);
//   console.log('Click event triggered');
//   this.inputValue = 'Hello World';
// }

// onKeyPress(){
//   console.log('Key Pressed');
// }

// onKeyDown(){
//   console.log('Key Down');
// }

// onKeyUp(){
//   console.log('Key Up');
// }

// onFocus(){
//   console.log('Focus event triggered');
// }

// onSelect(){
//   console.log('Select event triggered');
// }

// onBlur(){
//   console.log('Blur event triggered');
// }

// onKeyPress(event: any){
//   console.log(event.target.value);
// }

// isShift(){
//   console.log('Shift key pressed');
//   alert('Shift + y key pressed');
// }

// staticInput: string = 'Static two-way binding';
// dynamicInput: string = 'Dynamic two-way binding';

// display: boolean = false;

// num: number = 20;

// displayElement: boolean = false;
// show() : void {
//   this.displayElement = !this.displayElement;
// }

// fullStackDev = [
//   { id:1, name: 'John Doe', age: 30, skills: 'HTML'},
//   { id:2, name: 'Jane Smith', age: 28, skills: 'Angular'},
//   { id:3, name: 'Sam Wilson', age: 25, skills: 'React'},
//   { id:4, name: 'Peter Parker', age: 22, skills: 'JavaScript'},
//   { id:5, name: 'Tony Stark', age: 35, skills: 'Node.js'},
//   { id:6, name: 'Bruce Wayne', age: 32, skills: 'Python'},
//   { id:7, name: 'Clark Kent', age: 29, skills: 'Java'},
// ];

// person = {
//   name: 'John Doe',
//   age: 28,
// };

// age: number= 0;
// isEligible: boolean = false;
// checkEligibility() {
//   this.isEligible = this.age >= 18;
// }

// updateStyles: any = 'updateStyles';

// hasText: boolean = false;
// textInput(event: any) {
//   this.hasText = event.target.value !== '';
// }

// colorMode: string = 'lightMode';
// toggleMode() {
//   if(this.colorMode === 'lightMode') {
//     this.colorMode = 'darkMode';
//   }
//   else {
//     this.colorMode = 'lightMode';
//   }
//   console.log(this.colorMode);
// }

// applyVal = {
//   color: 'darkgreen',
//   'font-size': '30px',
//   'font-style': 'italic',
//   'font-weight': 'bold',
// }
// colorVal: string = 'navy';
// fontSize: string = '30px';
// isItalic: string = 'italic';

// subjectList = [{
//   subCode:101,
//   name: 'HTML'
// }, {
//   //subCode:102,
//   name: 'CSS'
// }, {
//   subCode:103,
//   name: 'JavaScript'
// }, {
//   subCode:104,
//   name: 'Angular'
// }, {
//   subCode:105,
//   name: 'React'
// }, {
//   subCode:106,
//   name: 'Node.js'
// }]

// isAuthorized: boolean = true;

// listItems: string[] = [];

// user: string = '';

// a: number = 10;
// b: number = 20;
// calc(): number{
//   return this.a + this.b;
// }

// employees = [
//   { id: 1, name: 'John Doe', salary:45000 },
//   { id: 2, name: 'Jane Smith', salary: 55000 },
//   { id: 3, name: 'Sam Wilson', salary: 60000 },
//   { id: 4, name: 'Peter Parker', salary: 70000 },
//   { id: 5, name: 'Tony Stark', salary: 80000 },
//   { id: 6, name: 'Bruce Wayne', salary: 90000 },
//   { id: 7, name: 'Clark Kent', salary: 100000 },
// ];


// nm = '';
// em = '';
// ph = '';
// add = '';
// submitted:boolean = false;
// showHeading: boolean = true;
// qualification = [{ school:'', degree: '', year: '' }];
// addQualification() {
//   this.qualification.push({ school:'', degree: '', year: '' });
// }
// formSubmit(){
//   this.submitted = true;
//   this.showHeading = false;
// }
// formEdit(){
//   this.submitted = false;
//   this.showHeading = true;
// }

// inputValue: string = 'New Value';
// updateValue(){
//   this.inputValue = "App Componenet";
// }
// count: number = 0;
// counterInterval: any;

// startCounter() {
//   this.counterInterval =  setInterval(() => {
//     if (this.count <= 5) {
//       console.log(this.count++);
//     } else {
//       clearInterval(this.counterInterval);
//     }
//   }, 1000);
// }
// ngOnInit(): void {
//     this.startCounter();
// }

// constructor() {
// }

// user = {
//   name: 'John Doe',
// };
// changeUserName() {
//   this.user.name = 'Jane Smith';
//   console.log(this.user.name);
// }
// dataFromParent: string = '';
// ngAfterContentInit(): void {
//   console.log('ngAfterContentInit called');
// }
// sendDataToChild(){
//   let random = Math.floor(Math.random() * 10);
//   this.dataFromParent = `Data from Parent Component : ${random}`;
// }

// displayComponent: boolean = true;
// toggle(): void {
//   this.displayComponent = !this.displayComponent;
// }
// ngOnInit(): void {
//   console.log('ngOnInit called');
// }

// displayMessage: string = "Hi! Mesage from Parent component";

// @ViewChild(TestComponent) testComponent?: TestComponent;
// @ViewChild('btnIncr') btnRef?: ElementRef<HTMLButtonElement>;
// incrChildCounter(){
//   console.log(this.testComponent);
//   this.testComponent?.incrCounter();
// }
// ngAfterViewInit(): void {
//   if(this.btnRef?.nativeElement) {
//     this.btnRef.nativeElement.innerHTML = 'Counter ++';
//   }
// }

// title : string = 'Example of Pipes in Angular';
// showDate: Date = new Date();

// itemArray = ['Item01', 'Item02', 'Item03', 'Item04', 'Item05'];

//

// showJson: boolean = false;
// students =[
//   {name: 'John', age:21, gender: "Male", major: 'Angular'},
//   {
//     name: 'Jane',
//     age: 22,
//     genger:"Male",
//     major: 'React'
//   },
//   {
//     name: 'Sam',
//     age: 23,
//     gender:"Female",
//     major: 'JavaScript'
//   },
//   {
//     name: 'Peter',
//     age: 24,
//     gender:"Male",
//     major: 'Node.js'
//   },
//   {
//     name: 'Fathima',
//     age: 25,
//     gender:"Female",
//     major: 'Python'
//   }
// ];
// toggleJson(){
//   this.showJson = !this.showJson;
// }

// numbers: number[] = [5, 3, 8, 1, 4, 2, 7, 6];
// sortOrder: 'asc' | 'desc' = 'asc'; // Default sort order is ascending
// showList: boolean = false;
// showSorting(){
//   this.showList = true;
// }

// stringVal: string = '';

// myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// updateValue(){
//   this.myArray.push(11);
// }

// employees: any[];
// empId: number = 0;
// emp: any;
// constructor(private e: EmployeeService) {
//   this.employees = this.e.getEmployees();
// }
// showDetails(employeeId: number) {
//   this.empId = employeeId;
//   this.emp = this.e.getEmployeeById(employeeId);
// }

// constructor(public cubeService: CubeService ){}
// calcCube(): number{
//     return this.cubeService.calculateCube(5);
// }

// public logger = inject(LogMessage1Service);
// ngOnInit(): void {
//     this.logger.log();
// }

// constructor(@Inject('LOG_MSG1') private logger: LogMessage1Service) {
// }
// ngOnInit(): void {
// this.logger.log();
// }

// constructor(@Inject('STR_MSG') public msg: string) {
// }
// ngOnInit(): void {}

// constructor(public getAdmin: AdminDataService) {}
// ngOnInit(): void {}

// constructor(private alertMsg: AlertMessage1Service){
// }
// displayAlert(){
//   this.alertMsg.showAlert();
// }
// ngOnInit(): void {
// }

// constructor(private msgService: MessageService){
//   console.log(this.msgService.msg());
// }

// message: string ;
// constructor(private appUpdateService: AppUpdateService) {
//   this.message = this.appUpdateService.getAppUpdate();
// }

// constructor(
//   @Inject('GREETING_MSG_FACTORY') public factoryMsg: string,
//   @Inject('GREETING_MSG_VALUE') public valueMsg: string,
// ){
//   console.log('useFactory Message',this.factoryMsg);// This will log the message from the factory function Dynamic Injection Token
//   console.log('useValue Message',this.valueMsg);// This will log the message from the value Type Token
// }

// user: { username:string} = { username: '' };
// submitForm(myForm: NgForm){
//   if(myForm.valid){
//     alert(`Form submitted successfully! Username: ${this.user.username}`);
//     console.log(`Form submitted successfully! Username: ${this.user.username}`);
//   }
// }

// formSubmit(myForm: NgForm) {
//   if (myForm.valid) {
//     const formValue = JSON.stringify(myForm.value);
//     console.log(formValue);
//     console.log('%cForm submitted successfully!', 'color: green; font-weight: bold; font-size: 16px;');
//     alert(`Form submitted successfully! ${formValue}`);
//   } else {
//     console.log('%cForm is invalid!', 'color: red; font-weight: bold; font-size: 16px;');
//     alert('Form is invalid! Please fill out all required fields.');
//   }
// }
// resetValue(myForm: NgForm) {
//   myForm.resetForm();
//   console.log('%cForm reset successfully!', 'color: blue; font-weight: bold; font-size: 16px;');
//   alert('Form reset successfully!');
// }
// setDefault(myForm: NgForm) {
//    myForm.resetForm({
//     name: 'Default Name',
//     email: 'default@example.com',
//    });
// }

// usernameControl = new FormControl('',[
//   Validators.required,
//   Validators.minLength(3),
//   Validators.maxLength(15),
//   Validators.pattern('^[a-zA-Z0-9]+$') // Alphanumeric characters only
// ]);
// showValue(){
//   console.log('Username:', this.usernameControl.value);
//   console.log('Validation Status:', this.usernameControl.valid);
//   console.log(this.usernameControl.errors);
// }

// myForm: FormGroup;
// constructor() {
//   this.myForm = new FormGroup({
//     name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
//     email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
//     age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(65)]),
//   });
// }
// onSubmit(){
//   const userAge = this.myForm.get('age')?.value;
//   if (userAge < 18 ){
//     alert('You must be at least 18 years old.');
//     return;
//   }else if (this.myForm.valid) {
//     alert('Form submitted successfully!');
//     console.log('Form submitted successfully!', this.myForm.value);
//   }
// }

// employeeForm: FormGroup;
// constructor() {
//   this.employeeForm = new FormGroup({
//     employees: new FormArray([]),

//   });
// }
// get employees(): FormArray {
//   return this.employeeForm.get('employees') as FormArray;
// }
// addEmployee() : void {
//   const employeeGroup = new FormGroup({
//     name:  new FormControl('', Validators.required),
//     job: new FormControl('', Validators.required),
//   });
//   this.employees.push(employeeGroup);
// }
// submitForm(){
//   if (this.employeeForm.invalid){
//     return;
//   }else {
//     console.log('Form submitted successfully!', this.employeeForm.value);
//   }
// }

// employeeForm: FormGroup;
// constructor(private fb: FormBuilder) {
//   this.employeeForm = this.fb.group({
//     employees: this.fb.array([]),

//   });
// }
// get employees(): FormArray {
//   return this.employeeForm.get('employees') as FormArray;
// }
// addEmployee() : void {
//   const employeeGroup = this.fb.group({
//     name:  ['', Validators.required],
//     job: ['', Validators.required],
//   });
//   this.employees.push(employeeGroup);
// }
// submitForm(){
//   if (this.employeeForm.invalid){
//     return;
//   }else {
//     console.log('Form submitted successfully!', this.employeeForm.value);
//   }
// }

// myForm : FormGroup;
// nameControl : FormControl;
// emailControl : FormControl;
// constructor(){
//   this.nameControl = new FormControl('',Validators.required);
//   this.emailControl = new FormControl('', [Validators.required, Validators.email])
//   this.myForm = new FormGroup({
//     name:this.nameControl,
//     email:this.emailControl,
//   });
// }

//   formSubmit(){
//     if(this.myForm.valid){
//       console.log('Form Values: ', this.myForm.value);
//     }
//   }

// myForm : FormGroup;
// isSumbitted: boolean = false;
// constructor(private fb: FormBuilder){
//   this.myForm = this.fb.group({
//     userDetails: this.fb.group({
//       fname: ['', Validators.required, upperCaseValidator],
//       email: ['', [Validators.required, Validators.email]],
//       password : ['',Validators.required],
//     }),
//     additionalDetails: this.fb.group({
//       mobile: ['', [
//         Validators.required,
//         Validators.pattern(/^(\+94|94|0)?\d{9}$/)
//       ]],
//       address: ['', Validators.required],
//       country: ['', Validators.required],
//       gender:['', Validators.required],
//     }),
//   });
// }
// step: any =1;
// get userDetails (){
//   return this.myForm.get('userDetails') as FormGroup;
// }
// get additionalDetails() {
//   return this.myForm.get('additionalDetails') as FormGroup;
// }

// get feedback() {
//   return this.myForm.get('feedback') as FormGroup;
// }
// btnPrevious() {
//     this.step -= 1;
// }
// btnNext() {
//     const userDetailsGroup = this.myForm.get('userDetails') as FormGroup;
//     const additionalDetailsGroup = this.myForm.get('additionalDetails') as FormGroup;
//     if(userDetailsGroup.invalid && this.step == 1){
//       return;
//     }
//     if(additionalDetailsGroup.invalid && this.step == 2){
//       return;
//     }
//     if(this.step < 3)
//     {
//       this.step += 1;
//     }

// }
// formSubmit(){
//   if(this.myForm.valid){
//     this.isSumbitted = true;
//   }
//   console.log(this.myForm.value);
// }

constructor(){
  const observable = new Observable((observer) => {
    console.log('Observable executed');
  }).subscribe();
}

}
