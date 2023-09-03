import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  // Add HTTP Client to the constructor
  constructor(private httpClient: HttpClient) { }

  // Get API call with headers and parameters
  getData(parameter: any, headers: any, apiurl: string) {
    // Set the parameters for HTTP Params and Headers
    let paramsHTTP: HttpParams = parameter;
    let headerHTTP: HttpHeaders = headers;

    // Return data results
    // URL, Headers
    return this.httpClient.get(apiurl, { headers: headerHTTP, params: paramsHTTP });
  }
}