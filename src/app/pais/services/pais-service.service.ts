import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { PaisInterface } from "../interfaces/Pais.interface";
import { HttpClientModule } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  constructor(private http:HttpClient) { }

  public listapaises:PaisInterface[]=[];

  get lalistapaises():PaisInterface[]{
    return [...this.listapaises];
  }

  buscarpais(busqueda:String){
    this.http.get<PaisInterface>("https://restcountries.com/v3.1/name/"+busqueda)
    .subscribe((response:any)=>{
      console.log(response);
      let datospeticion:any;
      datospeticion=response;
      console.log(datospeticion);
      for (let index = 0; index < datospeticion.length; index++) {
        this.listapaises.push(datospeticion[index]);
      }
    })
  }



}
