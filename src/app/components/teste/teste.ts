import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-teste',
  imports: [DatePickerModule, SelectModule, ButtonModule, InputTextModule, TextareaModule],
  templateUrl: './teste.html',
  styleUrl: './teste.css'
})
export class Teste {

}
