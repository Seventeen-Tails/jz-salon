import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-teste',
  imports: [DatePickerModule, SelectModule, ButtonModule],
  templateUrl: './teste.html',
  styleUrl: './teste.css'
})
export class Teste {

}
