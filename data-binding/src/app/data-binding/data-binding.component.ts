import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    templateUrl: './data-binding.component.html',
    styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

    url             = 'http:192.168.15.59';
    cursoAngular    = true;
    urlImg          = 'http://placeholder.pics/svg/400x200';
    valorAtual      = '';
    valorSalvo      = '';
    isMouseOver     = false;
    nome            = 'abc';
    valorInicial    = 15;

    nomeDoCurso     = 'Angular';

    pessoa: any     = {
        nome: 'def',
        idade: 31
    };
    getValor() {
        return 1;
    }
    botaoClicado() {
        alert('clicou');
    }
    onKeyUp(evento: KeyboardEvent) {
        this.valorAtual = (<HTMLInputElement>evento.target).value;
    }
    salvarValor(valor) {
        this.valorSalvo = valor;
    }
    // mouse
    onMouseOver() {
        this.isMouseOver = true;
    }
    onMouseOut() {
        this.isMouseOver = !this.isMouseOver;
    }
    // output
    onMudouValor(evento) {
        console.log(evento);
    }
    constructor() { }

    ngOnInit() {
    }

}
