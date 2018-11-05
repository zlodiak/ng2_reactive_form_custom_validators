import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'error-mesages',
  templateUrl: './error-mesages.component.html',
  styleUrls: ['./error-mesages.component.scss']
})
export class ErrorMesagesComponent implements OnInit, OnChanges, DoCheck {

	errorMessages = [];
	@Input() field;

  constructor() { }

  ngOnInit() {
  	
  }

  ngOnChanges() {
  	// console.log('OnChanges')
  }

  ngDoCheck() {
  	console.log('DoCheck', this.field)
  	if (this.field.dirty) {
			this.checkErrors();
  	}  	
  }

  checkErrors() {
  	this.errorMessages = [];
  	if (!this.field.errors) { return; }
  	const errors = Object.keys(this.field.errors);

  	if (errors.indexOf('minlength') > -1) {
			this.errorMessages.push('Минимальная длина значения 4 символа.');
  	}

  	if (errors.indexOf('maxlength') > -1) {
			this.errorMessages.push('Максимальная длина значения 4 символа.');
  	}

  	if (errors.indexOf('max') > -1) {
			this.errorMessages.push('Максимальное значение ' + (new Date()).getFullYear() + '.');
  	}  	

  	if (errors.indexOf('min') > -1) {
			this.errorMessages.push('Минимальное значение 1900.');
  	}  	  	

  	if (errors.indexOf('pattern') > -1) {
			this.errorMessages.push('Значение может состоять только из цифр.');
  	}  	

  	if (errors.indexOf('required') > -1) {
			this.errorMessages.push('Значение не может быть пустым');
  	}  	  	
  	// errors.forEach(e => {
  	// 	console.log(typeof this.field.errors, this.field.errors[e])
  	// });
  }

}
