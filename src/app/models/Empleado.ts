import { EmpleadoListComponent } from '../components/empleado-list/empleado-list.component';
export class Empleado {
    No: number = 0;
    RFC: string = "";
    Nombre_completo: string = "";
    Apellido_Paterno: string = "";
    Apellido_Materno: string = "";
    Sexo: string = "";
    Salario: number = 0;

    constructor(No: number,
        RFC: string,
        Nombre_completo: string,
        Apellido_Paterno: string,
        Apellido_Materno: string,
        Sexo: string,
        Salario: number)
    {
        this.No = No;
        this.RFC = RFC;
        this.Nombre_completo = Nombre_completo;
        this.Apellido_Paterno = Apellido_Paterno;
        this.Apellido_Materno = Apellido_Materno;
        this.Sexo = Sexo;
        this.Salario = Salario;
    }
}