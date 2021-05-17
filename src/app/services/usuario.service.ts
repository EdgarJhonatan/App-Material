import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  lisUsuarios: Usuario[] = [
    {
      usuario: 'edelga',
      nombre: 'Edgar',
      apellido: 'Delgadillo',
      sexo: 'Masculino',
    },
    {
      usuario: 'jperez',
      nombre: 'Jorgue',
      apellido: 'Perez',
      sexo: 'Masculino',
    },
    { usuario: 'jramos', nombre: 'Juan', apellido: 'Ramos', sexo: 'Masculino' },
    { usuario: 'lpio', nombre: 'Liliana', apellido: 'Pio', sexo: 'Femenino' },
    { usuario: 'rruiz', nombre: 'Rosa', apellido: 'Ruíz', sexo: 'Femenino' },
    { usuario: 'ecruz', nombre: 'Edward', apellido: 'Cruz', sexo: 'Masculino' },
    {
      usuario: 'rromero',
      nombre: 'Roberto',
      apellido: 'Romero',
      sexo: 'Masculino',
    },
  ];

  constructor() {}

  getUsuario() {
    return this.lisUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.lisUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.lisUsuarios.unshift(usuario);
  }
}
