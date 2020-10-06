import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: "root"
})

//creating dummy POST request to send form data to a server for multiple data:

export class EnrollmentService {

    url: 'http://localhost:3000/enroll';
    constructor(private http: HttpClient) { }

    register(userData : any){
        return this.http.post<any>(this.url, userData)
    }
}