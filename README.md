# Accessible Angular 6 and Angular Material Example
This example is included in an application that is deployed on GitHub. It was created using the [Angular CLI](https://cli.angular.io/) and [Angular Material](https://material.angular.io/). Accessibility test results are included in the application.


To see the working demo, go to [Angular 6 and Angular Material Example](https://snidersd2.github.io/).

Select the link in the left navigation pane of the demo to view accessible Angular Material cards and form controls.

To improve accessibility, the following have been added to the application:
- [W3C WAI ARIA Roles](https://www.w3.org/WAI/PF/aria/roles)
- [W3C WAI ARIA 14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/TR/WCAG20-TECHS/ARIA14.html)
- [W3C WAI ARIA 21: Using aria-invalid to indicate an error field](https://www.w3.org/TR/WCAG20-TECHS/ARIA21.html)
- Styles to improve color contrast.

Angular Material automatically includes the following on the form controls in this example:

- mat-form-field uses the label tag to automatically create the aria-label for the input
- mat-select automatically adds role="listbox" to the component and role="option"to the select options.
- mat-radio-button automatically adds input type="radio" to the component.
- mat-checkbox uses an internal input type="checkbox". This internal checkbox receives focus and is automatically labelled by the text content of the mat-checkbox element. In addition, aria-checked="false" is added and automatically changes to aria-checked="true" when the checkbox is checked.
- tabindex="0"
Note: The [Angular Material](https://material.angular.io/) web site lists the built-in accessibility for each component.

## Installation Instructions
Follow these steps to install the Accessible Angular 6 and Angular Material Example application:
- Clone or download the accessible-material repository. 
    - If you download the zip file extract it before proceeding. 
- From the command-line navigate to the accessible-material (clone) or accessible-angular-master (unzip) directory.
- Type: npm install
- Type: ng serve --open
