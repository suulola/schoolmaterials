import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  JSSHTMLData: any = {};
  SSHTMLData: any = {};

  async ngOnInit() {

 const res = await fetch("https://gist.githubusercontent.com/mySuulola/acd085b0287648332d8d563bffff47b2/raw/677225e5ab684b1373e32c65169a527bc54826ca/subject.json", {
  // method: 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: 'no-cors', // no-cors, *cors, same-origin
  // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  // credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  // redirect: 'follow', // manual, *follow, error
  // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  // body: JSON.stringify(data) // body data type must match "Content-Type" header
})
console.log(res)
 const result = res.json()
 console.log(result)
 
}

  title = '3rd Term';

  data: string = `<img src="assets/students.svg" alt="learning" class="imageHeight">`

  juniorClasses = [
    {name: "JSS 1", value: "JSS1"},
    {name: "JSS 2", value: "JSS2"},
    {name: "JSS 3", value: "JSS3"},
  ];

  seniorClasses = [
    {name: "SSS 1", value: "SS1"},
    {name: "SSS 2", value: "SS2"},
  ];
 
  juniorClassSubjects = [
    {name: "Mathematics", value: "maths"},
    {name: "Agric Science", value: "agric"},
    {name: "Fine Art", value: "fineart"},
    {name: "English", value: "eng"},
    {name: "Basic Technology", value: "basictech"},
    {name: "Home Economics", value: "homeecons"},
    {name: "Social Studies", value: "socstd"},
    {name: "Basic Science", value: "basicsci"},
    {name: "Business Studies", value: "busstd"},
    {name: "Civic Education", value: "civicedu"},
    {name: "PHE", value: "phe"},
    {name: "French", value: "french"},
    {name: "Christian Religious Studies", value: "crk"},
  ];
 
  seniorClassSubjects = [
    {name: "English Language", value: "eng"},
    {name: "Geography", value: "geo"},
    {name: "Literature-in-English", value: "lit"},
    {name: "Further Mathematics", value: "futhmaths"},
    {name: "Agricultural Science", value: "agric"},
    {name: "Financial Accounting", value: "finacc"},
    {name: "Biology", value: "bio"},
    {name: "Physics", value: "phy"},
    {name: "Economics", value: "econs"},
    {name: "Chemistry", value: "chem"},
    {name: "Commerce", value: "comm"},
    {name: "Data Processing", value: "dataproc"},
    {name: "Mathematics", value: "maths"},
    {name: "Civic Education", value: "civic"},
  ];

  handleJSSLoad( cla, subject) {
    if(this.JSSHTMLData === {}) {
      // do nothing
      return;
    }
    this.data =   this.JSSHTMLData[cla][subject]  == undefined ? "No data " : this.JSSHTMLData[cla][subject].data
  }
  handleSSSLoad( cla, subject) {
    this.data =   this.SSHTMLData[cla][subject]  == undefined ? "No data " : this.SSHTMLData[cla][subject].data
  }
 
  

  reset() {
    this.data= `<img src="assets/students.svg" alt="learning" class="imageHeight">`
  }

}
