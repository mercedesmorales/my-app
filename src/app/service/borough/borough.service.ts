import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class BoroughService {
  
  constructor(private http:HttpClient) { }
    getBoroughs():Observable<any> {
		return this.http.get('http:/jsonplaceholder.typicode.com/todos/1');
	}
}

