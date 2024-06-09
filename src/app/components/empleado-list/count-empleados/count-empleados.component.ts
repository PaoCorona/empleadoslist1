import { Component, Input } from '@angular/core';
import { Empleado } from '../../../models/Empleado';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrl: './count-empleados.component.scss'
})
export class CountEmpleadosComponent {

  

  @Input() listEmpleados!: Empleado[];
  @Input() obtenerTotalEmpleados!: (sex: string) => number;
  @Input() radioBottonSeleccionado!: string;
  @Input() genero!: any[];
  @Input() radioChangeHandler!: (event: any) => void;

  constructor() { }

  ngOnInit(): void {}

}
