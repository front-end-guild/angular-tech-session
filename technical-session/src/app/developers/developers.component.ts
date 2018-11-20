import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-developers',
    templateUrl: './developers.component.html',
    styleUrls: ['./developers.component.scss']
})
export class DevelopersComponent implements OnInit {

    developer = {};
    developersList = [];

    constructor() {
        this.developersList = [
            {firstName: 'Daniel', lastName: 'Tamir', numberOfBugs: 20},
            {firstName: 'Chuck', lastName: 'Norris', numberOfBugs: -10},
            {firstName: 'Yaniv', lastName: 'Zadok', numberOfBugs: 10},
            {firstName: 'Nitay', lastName: 'Neeman', numberOfBugs: 5},
            {firstName: 'Vered', lastName: 'Neger', numberOfBugs: 10},
            {firstName: 'Mickey', lastName: 'Mouse', numberOfBugs: 100},
            {firstName: 'Jhon', lastName: 'Travolta', numberOfBugs: 1},
            {firstName: 'Daniel', lastName: 'Tamir', numberOfBugs: 20},
        ];
    }

    ngOnInit() {
    }

    saveDeveloper() {
        this.developersList.push(this.developer);
    }

    deleteDeveloper(developerIndex) {
        this.developersList.splice(developerIndex, 1);
    }
}
