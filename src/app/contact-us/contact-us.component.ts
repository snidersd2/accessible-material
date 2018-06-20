import {Component, OnInit} from '@angular/core';
declare var jquery:any;
declare var $ :any;

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'contact-us.component',
  templateUrl: 'contact-us.component.html',
  styleUrls: ['contact-us.component.css'],
})

export class SecondPageComponent{

  model: any = {};
  onSubmit(form: any): void {  
    console.log('you submitted value:', form);  
  }
  ngOnInit(){
    $(document).ready(function(e) {
      $('#signup').submit(function() {
        $('#errText').html('');
    $('input').removeAttr("aria-invalid");
    $('label').removeAttr("class");
    var eFlag = 0;
        if ($('#firstName').val() === '') {
          $('#firstName').attr("aria-invalid", "true");
    $("label[for='firstName']").addClass('failed');
    eFlag++;
        }
        if ($('#lastName').val() === '') {
          $('#lastName').attr("aria-invalid", "true");
    $("label[for='lastName']").addClass('failed');
    eFlag++;
        } 
        if ($('#email').val() === '') {
          $('#email').attr("aria-invalid", "true");
    $("label[for='email']").addClass('failed');
    eFlag++;
        } 
        if ($('#message').val() === '') {
          $('#message').attr("aria-invalid", "true");
    $("label[for='message']").addClass('failed');
    eFlag++;
        } 
    if (eFlag > 0) {
        $('#errText').html("Please complete  all required fields (" + eFlag + ") and retry").focus();
    }
        return false;
      });
    });
  }

}
 






