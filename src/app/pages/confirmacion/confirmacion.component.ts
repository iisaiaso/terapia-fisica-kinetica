import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    Swal.fire({
      title: 'Exito!',
      text: 'El proceso de recerva de cita fue enviado correctamente, en breves momentos nos contactaremos con usted',
      icon: 'success',
      confirmButtonText: 'OK'
    })

    this.router.navigate(['/']);
  }

}
