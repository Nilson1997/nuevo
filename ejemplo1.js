const _private=new WeakMap();
class libros {
    constructor(autor, nombre, numerodepaginas){
        const propiedades={
        _autor:autor,
        _nombre:nombre,
        _numerodepaginas:numerodepaginas
        }
        _private.set(this,{propiedades})
    }
    set nombrelibro(nombre1){
        return _private.get(this).propiedades['_nombre']=nombre1
    }
    get mostrarlibro(){
        return _private.get(this).propiedades['_nombre']=nombre1
    }
}
let libro1=new libros ("Nilson ", "cincuenta sombras ", "550")
console.log(libro1)
let libro2=new libros ("nn ", "365 ", "220")
console.log(libro2)
let libro3=new libros ("tt ", "scape ", "165")
console.log(libro3)