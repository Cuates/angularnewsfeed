import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetVariableService {
  // Set URL parameter for the API call
  apiURL = 'api_url';

  // Set parameters for the API call
  payload = [{}];

  // Set parameters for the API call
  params = {
  }

  // Set headers for the API call
  headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json'
  }

  constructor() { }
}
