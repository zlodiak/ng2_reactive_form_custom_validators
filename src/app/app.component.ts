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
                                                      Validators.pattern("^[0-9]*$")
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
}