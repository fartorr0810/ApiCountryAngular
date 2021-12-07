import { Component, ElementRef, Input, OnInit, ViewChild ,EventEmitter, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PaisService } from '../services/pais-service.service';
import { PaisDatosInterface, PaisInterface } from '../interfaces/Pais.interface';
@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  busqueda:string='';
  resultado:PaisDatosInterface[]=[];
  constructor(private route:ActivatedRoute,public serviciopais:PaisService) {
   }
  buscar(event:any):PaisDatosInterface[]{
    if(event.keyCode=="13"){
      this.serviciopais.buscarpais(event.target.value);
      return this.serviciopais.lalistapaises;
    }
  return this.resultado;
  }
  obtenerResultado():PaisDatosInterface[]{
    return this.resultado;
  }
  ngOnInit(): void {
  }

}
