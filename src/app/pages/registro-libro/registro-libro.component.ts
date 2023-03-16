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
  archivocapturado?:any;
  public libros: libros = new libros();
  libros1: libros[] = [];
  libs: libros[]=[];
  bus: boolean = true;
  buscarval: boolean = false;
  public previsualizacion?: string;
  constructor(private sanitizer: DomSanitizer,private libroservice: RegistroLibroService, private router: Router,private http: HttpClient) { }
  @ViewChild('titulo') titulo!: ElementRef;
  @ViewChild('autor') autor!: ElementRef;
  @ViewChild('editorial') editorial!: ElementRef;
  @ViewChild('precio') precio!: ElementRef;
  @ViewChild('stock') stock!: ElementRef;
  @ViewChild('categoriaSelec') categoriaSelect!: ElementRef;


  
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
  editar(libro:any){
    this.titulo.nativeElement.value = libro.titulo;
    this.autor.nativeElement.value = libro.autor;
    this.editorial.nativeElement.value = libro.editorial;
    this.precio.nativeElement.value = libro.precio;
    this.stock.nativeElement.value = libro.stock;

     // Obtener el elemento nativo del ComboBox
     const selectElement = this.categoriaSelect.nativeElement;

     // Buscar la opción correspondiente al valor de libro.categoria
     let selectedOption = selectElement.querySelector(`[value="${libro.categoria}"]`);
 
     // Si la opción no existe, agregarla al ComboBox
     if (!selectedOption) {
       selectedOption = new Option(libro.categoria, libro.categoria);
       selectElement.add(selectedOption);
     }
 
     // Establecer la opción seleccionada en el ComboBox
     selectElement.value = libro.categoria;

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
  

  capturarImagen(event: any) {
    const archivocapturado = <File>event.target.files[0]
    console.log(archivocapturado)
    const fd = new FormData();
    fd.append('pdf', this.archivocapturado, this.archivocapturado.name);
    this.http.post('http://localhost:8080/api/assets/upload', fd)
      .subscribe(response => {
        console.log(response);
      });
    
  }


  uploadFile(archivo:File) {
    
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
