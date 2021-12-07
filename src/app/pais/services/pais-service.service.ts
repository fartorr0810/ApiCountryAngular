import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { PaisDatosInterface, PaisInterface } from "../interfaces/Pais.interface";
import { HttpClientModule } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  constructor(private http:HttpClient) { }

  public listapaises:PaisDatosInterface[]=[];

  get lalistapaises():PaisDatosInterface[]{
    return [...this.listapaises];
  }

  buscarpais(busqueda:string){
    this.http.get<PaisInterface>("https://restcountries.com/v3.1/name/"+busqueda)
    .subscribe((response:any)=>{
      console.log(response);
      let datospeticion:any;
      datospeticion=response;
      console.log(datospeticion);
      let contador=0;
      for (let index = 0; index < datospeticion.length; index++) {
        let pais:PaisDatosInterface={
          id: contador,
          nombre: datospeticion[index].name,
          capital: datospeticion[index].capital,
          flag: datospeticion[index].flags,
          poblation: datospeticion[index].population
        }
        this.listapaises.push(pais);
        contador=contador+1;
      }
    });
  }



}
