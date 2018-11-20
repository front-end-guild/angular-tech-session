import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-developer',
    templateUrl: './developer.component.html',
    styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent implements OnInit {

    @Input() developer;
    @Input() developerIndex;
    @Output() onDeveloperDelete = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    deleteDeveloper() {
        this.onDeveloperDelete.emit(this.developerIndex);
    }
}
