import {NgForm, AbstractControl } from '@angular/forms';

export class CeibaForms {
    static anyControlInvalidAndTouched(ngform: NgForm): Boolean {
        let show = false;
        for (let  key in ngform.form.controls) {
            var control = ngform.form.controls[key];
            show = (control.invalid && control.touched) || show;
            if(show) break;
        }

        return show;
    }
}