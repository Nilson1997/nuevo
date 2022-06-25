class libros {
    constructor(autor, nombre, numerodepaginas){
        this.autor=autor
        this.nombre=nombre
        this.numerodepaginas=numerodepaginas
    }
    set nombrelibro(nombre1){

    }
    get mostrarlibro(){
        
    }
}
let libro1=new libros ("Nilson ", "cincuenta sombras ", "550")
console.log(libro1)
let libro2=new libros ("nn ", "365 ", "220")
console.log(libro2)
let libro3=new libros ("tt ", "scape ", "165")
console.log(libro3)