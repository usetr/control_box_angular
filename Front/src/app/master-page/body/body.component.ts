import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/model/User';
import { MasterPageService } from '../services/master-page.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
   title = 'B8A';
   users: User[] = [];
   descripcion = ""
   
   public  form = this.fb.group({
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
  });



  constructor(private masterPageService: MasterPageService,
    private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.allUser()

  }

  allUser() {

    try {  
    

      this.masterPageService.getAllUser().subscribe(response => {        
          this.users = response;        
      }, error =>{
        console.log(error)
      });
    } catch (error) {
      console.log(error)
    }
  }



  deleteUser(id: any) {    
   
      this.masterPageService.deleteUser(id).subscribe(response => {    
        console.log('Usuario Eliminado');   
        this.allUser();
      }, error =>{
        console.log(error)
      });   

  }

  updateUser(data: User) {


  }

  createUser() {
    let usuarios: User = new User();
    usuarios.nombre = this.nombre?.value;
    usuarios.apellido = this.apellido?.value;
    this.masterPageService.createUser(usuarios).subscribe(response => {    
      console.log('Usuario creado');   
      console.log(response);         
      this.allUser();
    
    }, error =>{
      console.log(error)
    });  



  }


  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }

}
