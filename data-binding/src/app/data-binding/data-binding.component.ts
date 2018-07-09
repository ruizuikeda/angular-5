import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

    url = 'http:192.168.15.59';
    cursoAngular = true;
    urlImg = 'http://placeholder.pics/svg/400x200';

    getValor() {
        return 1;
    }

    constructor() { }

    ngOnInit() {
    }

}
