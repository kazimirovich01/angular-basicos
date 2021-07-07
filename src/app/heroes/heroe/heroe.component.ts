import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})
export class HeroeComponent{

    nombre: string = 'Ironman';
    edad  : number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
        // return this.nombre + ' - ' + this.edad; esto es lo mismo que lo anterior
    }

    
    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        console.log('hey...');
        
        this.edad = 30;
    }

}
