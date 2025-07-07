import { Routes } from '@angular/router';
import { ServForm } from './views/servicos/serv-form/serv-form';
import { ServList } from './views/servicos/serv-list/serv-list';
import { Teste } from './views/teste/teste';
import { CliForm } from './views/clientes/cli-form/cli-form';
import { CliList } from './views/clientes/cli-list/cli-list';

export const routes: Routes = [
  { path: 'teste', component: Teste},
  { path: 'servico/form', component: ServForm},
  { path: 'servico/list', component: ServList},
  { path: 'cliente/form', component: CliForm},
  { path: 'cliente/list', component: CliList}
];
