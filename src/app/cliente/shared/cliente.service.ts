import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  url = environment.baseUrl + 'cliente';

  postCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post(this.url, cliente);
  }

}
