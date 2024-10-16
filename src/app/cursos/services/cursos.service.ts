import {Injectable} from '@angular/core';
import {Curso} from "../interfaces/curso.interface";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private _cursos: Curso[] = [
    {
      nombre: 'Excel Avanzado',
      descripcion: 'Descripcion Excel Avanzado...'
    },
    {
      nombre: 'Python',
      descripcion: 'Descripcion Python...'
    },
    {
      nombre: 'Bigdata',
      descripcion: 'Descripcion Bigdata...'
    }
  ];

  get cursos(): Curso[] {
    return [...this._cursos];
  }

  constructor() {
  }

  agregarCurso(curso: Curso) {
    this._cursos.push(curso);
  }
}
