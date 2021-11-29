import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Tablero } from '../models/tablero';
import { Tarea } from '../models/tarea';
import { TableroColaborador } from '../models/tablero-colaborador';



@Injectable({
  providedIn: 'root'
})
export class TablerosService {

  public tableroPasaDetail: Tablero = new Tablero();

  constructor(private http: HttpClient) { }

  url: string = 'https://remembermebackend.herokuapp.com/api/';
  items: Tablero[] = [];

  getTablerosUsuario(id_usuario: number): Observable<Tablero[]> {
    // console.log(this.http.get<Tarea[]>(this.url + '/tareas'))
    // return this.items;
    return this.http.get<Tablero[]>(this.url + 'tablerousr' + '/' + id_usuario);

  }

  getColaboradoesTablero(id_tablero: number): Observable<TableroColaborador[]> {
    // console.log(this.http.get<Tarea[]>(this.url + '/tareas'))
    // return this.items;
    return this.http.get<TableroColaborador[]>(this.url + 'tablerocolabora' + '/' + id_tablero);

  }

  removeColaborador(id: number): Observable<TableroColaborador> {
    // console.log(this.http.get<Tarea[]>(this.url + '/tareas'))
    // return this.items;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })

    };
    return this.http.delete<TableroColaborador>(this.url + 'removecolabora' + '/' + id);

  }


}
