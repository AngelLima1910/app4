import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'app-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
	public heroes : string[] = ['Superman', 'Batman', 'Flash', 'Aquaman', 'Robin'];
	public usuarios : any = [{id:1, nombre:"Angel"}, {id:2, nombre:"Roldan"}, {id:3, nombre:"Leslie"}];
	public hobbys : any = [{id:1, nombre : "Jugar videojuegos"}, {id:2, nombre : "Hacer ejercicio"}, 		{id:3, nombre : "Escuchar musica"}];
	public mayorEdad(edad:number) :boolean {
		if (edad >= 18) {
			return true;
		} else {
			return false;
		}
	}
}
