import {Component} from '@angular/core';
import {CursosService} from "../services/cursos.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  get cursos() {
    return this.cursosService.cursos;
  }

  constructor(private cursosService: CursosService) {
  }

}
