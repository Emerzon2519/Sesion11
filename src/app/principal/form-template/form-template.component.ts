import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Listado } from 'src/app/modelo/listado';
import {Registro} from 'src/app/modelo/registro';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder) { }

  registroform = this.formBuilder.group({
    nombres: ['',
    {
      validators:[
        Validators.required,
        Validators.pattern('^.{10,}$')
      ]
    }],
    email: ['',
    {
      validators:[
        Validators.required,
        Validators.pattern('mdiaz@gmail.com')
      ]
    }],
    mensaje: ['',
    {
      validators:[
        Validators.required,
      ]
    }]
})

  get nombres(){return this.registroform.get('nombres')}
  get email(){return this.registroform.get('email')}
  get mensaje(){return this.registroform.get('mensaje')}

  info="";
  confirmacion(){
    if(this.registroform.valid){
      this.info="Todos los datos son válidos"
    }
  }


  // lista= ["mdiaz@gmail.com"]
  
  ngOnInit(): void {
    for(let item in Listado) {
      if(isNaN(Number(item))){
        this.paises.push({text: item, value: Listado[item]})
        }
    }
  }
  
  model: Registro = {username: "", password:"",pais: Listado.Peru,ofertas:false};

  Enviar(){
    console.log(this.model);

  }

  Cancelar(){
    this.model = {username: "",password:"",pais: Listado.Peru,ofertas:false};
  }


  // atributo Array para el listado

  paises: any[] = [];

  // ngOnInit(){
  //   for(let item in Listado) {
  //     if(isNaN(Number(item))){
  //       this.paises.push({text: item, value: Listado[item]})
  //       }
  //   }
  // }

  nombre="";

}
