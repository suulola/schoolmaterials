import { Component } from '@angular/core';
import * as mammoth from 'mammoth/mammoth.browser.js';
import { allHTML } from "./data"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '3rd Term';
  data: string = "No data"

  juniorClasses = [
    {name: "JSS 1", value: "JSS1"},
    {name: "JSS 2", value: "JSS2"},
    {name: "JSS 3", value: "JSS3"},
  ];

  seniorClasses = [
    {name: "SSS 1", value: "SSS1"},
    {name: "SSS 2", value: "SSS1"},
    {name: "SSS 3", value: "SSS1"},
  ];
 
  juniorClassSubjects = [
    {name: "English", value: "eng"},
    {name: "Basic Technology", value: "basictech"},
    {name: "Home Economics", value: "homeecons"},
    {name: "Social Studies", value: "socstd"},
    {name: "Fine Art", value: "fineart"},
    {name: "Basic Science", value: "basicsci"},
    {name: "Business Studies", value: "busstd"},
    {name: "Agric Science", value: "agric"},
    {name: "Mathematics", value: "maths"},
    {name: "Civic Education", value: "civicedu"},
    {name: "PHE", value: "phe"},
    {name: "French", value: "french"},
    {name: "Christian Religious Studies", value: "crk"},
  ];
 
  seniorClassSubjects = [
    {name: "English Language"},
    {name: "Geography"},
    {name: "Literature-in-English"},
    {name: "Further Mathematics"},
    {name: "Agricultural Science"},
    {name: "Financial Accounting"},
    {name: "Biology"},
    {name: "Physics"},
    {name: "Economics"},
    {name: "Chemistry"},
    {name: "Commerce"},
    {name: "Data Processing"},
    {name: "Mathematics"},
  ];

  handleLoad( cla, subject) {
    console.log(subject)
    console.log(cla)
    this.data =   allHTML[cla][subject]  == undefined ? "No data " : allHTML[cla][subject].data

  }

}
