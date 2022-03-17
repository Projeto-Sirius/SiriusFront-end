import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import { AlertaComponent } from '../alerta/alerta.component';
@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }


  private showAlert(message:string,tipo:string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertaComponent)
    bsModalRef.content.type = tipo
    bsModalRef.content.message = message
  }

  showAlertDanger(message: string){
    this.showAlert(message,'danger')

  }

  showAlertSucess(message:string){
    this.showAlert(message,"success")
  }

  showAlertInfo(message:string){
    this.showAlert(message,'info')
  }
}
