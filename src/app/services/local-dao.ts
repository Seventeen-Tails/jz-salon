import { Injectable } from '@angular/core';
import { Servico } from '../models/servico';

@Injectable({
  providedIn: 'root'
})
export class LocalDao {
  servicoKey = 'jz-servicos';
  clienteKey = 'jz-clientes';

  constructor() { }

  createServico(servico: Servico) {
    let servicos = this.getServicos();
    servicos.push(servico);
    localStorage.setItem(this.servicoKey, JSON.stringify(servicos));

    return true;
  }

  getServicos() {
    let servicos = JSON.parse(localStorage.getItem(this.servicoKey) || '[]');

    return servicos;
  }

  getServiceById(id: string) {
    let servicos = this.getServicos() as Servico[];
    const servico = servicos.find(x => x.id === id);

    return servico;
  }

  updateService(servico: Servico) {
    const servicos = this.getServicos() as Servico[];
    const newServicos = servicos.filter(x => x.id !== servico.id);
    newServicos.push(servico);
    localStorage.setItem(this.servicoKey, JSON.stringify(newServicos));

    return true;
  }

  deleteService(id: string) {
    const servicos = this.getServicos() as Servico[];
    const newServicos = servicos.filter(x => x.id !== id);
    localStorage.setItem(this.servicoKey, JSON.stringify(newServicos));

    return true;
  }
}
