import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	form: FormGroup;

	ngOnInit() {
    this.form = new FormGroup({
      'year':            			new FormControl(null, [ 
                                                      Validators.required, 
                                                      Validators.minLength(4), 
                                                      Validators.maxLength(4),
                                                      Validators.min(1900),
                                                      Validators.max((new Date()).getFullYear()),
                                                      Validators.pattern("^[0-9]*$")
                                                    ]),
  		'floor':                new FormControl(null, [
                                                      Validators.required,
                                                      Validators.min(1),
                                                      Validators.max(50),
                                                      Validators.pattern("^[0-9]*$"),
                                                      this.floorValidator.bind(this)
                                                    ]),
  		'floorsCount':          new FormControl(null, [
                                                      Validators.required,
                                                      Validators.min(1),
                                                      Validators.max(50),
                                                      Validators.pattern("^[0-9]*$")
                                                    ]),
  		'radius':               new FormControl(null, [
                                                      Validators.required,
                                                      Validators.min(1),
                                                      Validators.pattern("^[0-9]*$")
                                                    ])
		})
	}

	submit() {
		console.log('submit', this.form);
	}

	floorValidator(control: FormControl) {
		let floor = null;
		let floorsCount = null;

		if (this.form) {
			floorsCount = +this.form.get('floorsCount').value;
		}

		if (control) {
			floor = +control.value;
		}

		if (floorsCount && floor) {
			return (floor > floorsCount) ? { 'floorValidator': true } : null;
		}

		return null;
	}
}