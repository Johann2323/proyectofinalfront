import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { libros } from './libros';
import { RegistroLibroService } from './registro-libro.service';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-libro',
  template: `
    <select #categoriaSelec>
      <option #terror value="fantasia">Fantasía</option>
      <option value="suspenso">Suspenso</option>
      <option value="historico">Histórico</option>
      <option value="drama">Drama</option>
    </select>
  `,
  templateUrl: './registro-libro.component.html',
  styleUrls: ['./registro-libro.component.css']
})
export class RegistroLibroComponent implements OnInit {
  archivocapturado:any;
  public libros: libros = new libros();
  libros1: libros[] = [];
  libs: libros[]=[];
  bus: boolean = true;
  buscarval: boolean = false;
  public previsualizacion?: string;
  fileName?: string;
  fileContent: any;
  fileNameimg: any;
  fileContentimg: any;
  fechaFormateada?: string;
  
  constructor(private sanitizer: DomSanitizer,private libroservice: RegistroLibroService, private router: Router,private http: HttpClient) { }
  @ViewChild('id') id!: ElementRef;
  @ViewChild('titulo') titulo!: ElementRef;
  @ViewChild('autor') autor!: ElementRef;
  @ViewChild('editorial') editorial!: ElementRef;
  @ViewChild('precio') precio!: ElementRef;
  @ViewChild('stock') stock!: ElementRef;
  @ViewChild('categoriaSelec') categoriaSelect!: ElementRef;
  @ViewChild('descripcion') descripcion!: ElementRef;
  @ViewChild('fecha') fecha!: ElementRef;
  @ViewChild('pdf') pdf!: ElementRef;
  @ViewChild('imagen') imagen!: ElementRef;

  
  ngOnInit(): void {
    this.libroservice.getLibros().subscribe(
      libro => this.libros1 = libro,
      
      //libro => this.libros=libro
    );
    this.buscarval = false;
    this.bus = true;

    
  }

  onKeydownEvent(event: KeyboardEvent, titulo: String): void {
    if (titulo == "") {
      this.ngOnInit();
    }
  }

  crearlibros(libro:any){

    if(this.validarpdf==true && this.validarimg==true){
      this.libros.titulo=this.titulo.nativeElement.value
    
      this.libros.autor=this.autor.nativeElement.value

      this.libros.editorial=this.editorial.nativeElement.value

      this.libros.precio=this.precio.nativeElement.value

      this.libros.stock=this.stock.nativeElement.value
      
      this.libros.descripcion=this.descripcion.nativeElement.value
      this.libros.fechacreacion=this.fecha.nativeElement.value
      
      
      
      this.libros.categoria=this.categoriaSelect.nativeElement.value

      console.log(libro.titulo,libro.autor, libro.editorial,libro.precio,libro.stock,libro.descripcion,libro.imagenpost, libro.imagenPhat,libro.categoria)

      this.libroservice.create(this.libros).subscribe(
        (data) => {
          console.log(data);
          window.location.reload();
          Swal.fire('Libro guardado', 'Libro registrado con exito en el sistema', 'success');
          
        }, (error) => {
          console.log(error);
          Swal.fire('Error', 'Libro no registrado', 'error');
        }
      )
    }else{
      Swal.fire('Agregue los archivos necesario', 'No se pudo completar el registro', 'warning');
    }
     
    

  }


editarlibro(id:string, libro:any){

  const numString = id;
const num = parseInt(numString); // num es igual a 42

console.log(num)
  this.libroservice.update(num,this.libros).subscribe(
    (data) => {
      console.log(data);
      window.location.reload();
      Swal.fire('Libro actualizado', 'Libro actualizado con exito en el sistema',"success");
    }, (error) => {
      console.log(error);
      Swal.fire('Error', 'Libro no actualizado', 'error');
    }
  )
}

  validaredit:boolean=false
  editar(libro:any){
    this.id.nativeElement.value=libro.id;
    this.titulo.nativeElement.value = libro.titulo;
    this.autor.nativeElement.value = libro.autor;
    this.editorial.nativeElement.value = libro.editorial;
    this.precio.nativeElement.value = libro.precio;
    this.stock.nativeElement.value = libro.stock;
    this.descripcion.nativeElement.value = libro.descripcion;
    

    const fecha = new Date(libro.fechacreacion);
    const year = fecha.getFullYear();
    const month = (fecha.getMonth() + 1).toString().padStart(2, '0'); // sumar 1 al mes porque los meses en JavaScript empiezan en 0
    const day = (fecha.getDate()+1).toString().padStart(2, '0');
    const hours = fecha.getHours().toString().padStart(2, '0');
    const minutes = fecha.getMinutes().toString().padStart(2, '0');
    this.fechaFormateada = `${year}-${month}-${day}T${hours}:${minutes}`;

    this.fecha.nativeElement.value = this.fechaFormateada;

     // Obtener el elemento nativo del ComboBox
     const selectElement = this.categoriaSelect.nativeElement;

     // Buscar la opción correspondiente al valor de libro.categoria
     let selectedOption = selectElement.querySelector(`[value="${libro.categoria}"]`);
 
     // Si la opción no existe, agregarla al ComboBox
     if (!selectedOption) {
       selectedOption = new Option(libro.categoria, libro.categoria);
       selectElement.add(selectedOption);
     }

      this.validaredit=true
     
 
     // Establecer la opción seleccionada en el ComboBox
     selectElement.value = libro.categoria;
     console.log(libro.id)

     

  }

  

  

  buscarLibxNomb(nombre: String) {
    this.bus = false;
    this.libroservice.buscarLibro(nombre).subscribe(
      librs => {
        this.libs = librs;
        console.log(this.libs.length);
        this.buscarval = true;
      }
    )
  }
  
  validarimg:boolean=false
  capturarImagen(event: any) {
    const archivocapturado = event.target.files[0]
    
    
    if (archivocapturado) {
      this.fileNameimg = archivocapturado.name;
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.fileContentimg = e.target.result;
      };
      reader.readAsText(archivocapturado);
    }
    

    const formData: FormData = new FormData();
    formData.append('file', archivocapturado, archivocapturado.name);
    console.log("Entreee")
    this.http.post('http://localhost:8080/api/assets/upload', formData )
      .subscribe((res:any) => {
        console.log(res);
        console.log(res.key)
        this.libros.imagenpost=res.key
        this.validarimg=true
        Swal.fire({
          
          title: "Imagen cargada correctamente",
          icon: "success",
          timer: 1500,
          timerProgressBar: true,
          toast: true,
          position: "center",
          html:'<i class="fas fa-image"></i>',
        });
      });
  }

  validarpdf: boolean=false;
  onFileSelected(event:any) {
    const file: File = event.target.files[0];
    
    if (file) {
      this.fileName = file.name;
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.fileContent = e.target.result;
      };
      reader.readAsText(file);
    }
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    console.log("Entreee")
    this.http.post('http://localhost:8080/api/assets/upload', formData)
      .subscribe((res:any) => {
        console.log(res);
        console.log(res.key)
        this.libros.imagenPhat=res.key
        this.validarpdf=true
        Swal.fire({
          
          title: "Pdf cargado correctamente",
          icon: "success",
          timer: 1500,
          timerProgressBar: true,
          toast: true,
          position: "center",
          html:'<i class="fas fa-file-pdf"></i>',
        });
        
        
        
        
      });
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result

        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      console.log("Error al Subir Imagen")
    }
  })




  

}
