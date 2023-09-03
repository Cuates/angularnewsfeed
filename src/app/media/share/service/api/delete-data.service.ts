import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteDataService {
  // Add HTTP Client to the constructor
  constructor(private httpClient: HttpClient) { }

  // Delete API call with headers and parameters
  deleteData(payload: any, headers: any, apiurl: string) {
    // Set the parameter for HTTP Headers
    const httpOption = {
      headers: new HttpHeaders(headers),
      body: payload
    }

    // Return results
    // URL, Payload, Headers
    return this.httpClient.delete(apiurl, httpOption);
  }
}