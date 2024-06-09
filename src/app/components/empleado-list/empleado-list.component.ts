import { Component } from '@angular/core';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.scss'
})
export class EmpleadoListComponent {
  listEmpleados: Empleado[] = [{No: 19141141,
  RFC: 'test',
Nombre_completo: 'VANNESA',
Apellido_Paterno: 'LOPEZ',
Apellido_Materno: '',
Sexo: 'femenino',
Salario: 1000},
{No: 2305,
  RFC: 'test',
Nombre_completo: 'DOLORES VIANEY',
Apellido_Paterno: 'ESCANDONA',
Apellido_Materno: 'PEREZ',
Sexo: 'femenino',
Salario: 12500},
{No: 2309,
  RFC: 'test',
Nombre_completo: ' DANIEL',
Apellido_Paterno: 'JIMENEZ',
Apellido_Materno: '',
Sexo: 'masculino',
Salario: 7500},
{No: 2315,
  RFC: 'test',
Nombre_completo: 'MIGUEL',
Apellido_Paterno: 'RODRIGUEZ',
Apellido_Materno: 'MECIAS',
Sexo: 'masculino',
Salario: 1500},
{No: 2319,
  RFC: 'test',
Nombre_completo: ' ALEJANDRA',
Apellido_Paterno: 'MORA',
Apellido_Materno: 'MARTINEZ',
Sexo: 'femenino',
Salario: 9500},
{No: 2352,
  RFC: 'test',
Nombre_completo: 'LUISA',
Apellido_Paterno: 'ZAMARRIPA',
Apellido_Materno: 'GARCIA',
Sexo: 'femenino',
Salario: 12000},
]
constructor()
{

}
ngOnInit(): void{

}
obtenerTotalEmpleados(sex: string): number
{
  if(sex=='masculino'){
    return this.listEmpleados.filter(list => list.Sexo == 'masculino').length;
  }
  if(sex=='femenino'){
    return this.listEmpleados.filter(list => list.Sexo == 'femenino').length;
  }
  return this.listEmpleados.length; 
}
radioBottonSeleccionado: string = 'empleados'; 
genero: any = [
  'masculino',
  'femenino',
  'empleados',
];
radioChangeHandler (event:any)
{
  this.genero=event.target.value;
}
}
