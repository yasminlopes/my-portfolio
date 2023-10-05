import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor(private http: HttpClient) { }

  public downloadFile(filePath: string): Observable<Blob> {
    const fileUrl = filePath; 
    return this.http.get(fileUrl, { responseType: 'blob' });
  }
}
