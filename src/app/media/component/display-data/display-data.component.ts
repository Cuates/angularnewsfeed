import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { SetVariableService } from '../../share/service/global/set-variable.service';
import { GetDataService } from '../../share/service/api/get-data.service';
import { DeleteDataService } from '../../share/service/api/delete-data.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {
  // Initialize parameters
  title = 'project_name';

  // Set the media data to empty array
  mediaData: any = []

  // Set the loader to true to display on page
  isLoading = true;

  // Status code, message, and ok status
  statusValue = '';
  messageValue = '';
  okValue = true;

  // Set parameter value
  limitValue:string = '25';
  sortValue:string = 'desc';

  // Add the ability to change title
  constructor(private titleService:Title, private setVariableService: SetVariableService, private getDataService: GetDataService, private deleteDataService: DeleteDataService) { }

  ngOnInit(): void {
    // Set title on page
    this.titleService.setTitle(this.title);

    // Set parameters for the API call
    this.setVariableService.params = {
      title: '',
      limit: this.limitValue,
      sort: this.sortValue
    }

    // Get information from API
    this.getDataService.getData(this.setVariableService.params, this.setVariableService.headers, this.setVariableService.apiURL)
    .subscribe({
      next: (response) => {
        // Next is for successful response message only
        // Set the loader to false to not display on page
        this.isLoading = false;

        // Return response from API
        this.mediaData = response;
      },
      // complete: () => {
      //   // Complete is for successful calls only
      // },
      error: err => {
        // Error is for subscription error calls only
        // Set the loader to false to not display on page
        this.isLoading = false;

        // Set error status, message, and okay message
        this.statusValue = err.status;
        this.messageValue = err.statusText;
        this.okValue = err.ok;
      }
    });
  }

  // Remove field from array
  removeField(index: number) {
    // Remove the data corresponding to the row in question
    this.mediaData.Result.splice(index, 1);
  }

  // Perform a task when button is clicked with values from the fields on the webpage
  handleAlterationDelete(title:string, row:number, mediaItems:any, methodValue:string) {
    // Create parameters with key pair values
    this.setVariableService.payload = [{
      title: title
    }];

    // Set the loader to true to display on page
    mediaItems.isPressedButton = true;

    // Check which button the end user is clicking and set spinner
    if (methodValue === "Delete") {
      mediaItems.buttonDeleteIsLoading = true;
    }

    // Set the ok to true to not display on page
    mediaItems.okValue = false;

    // Set the display value to false to not display the data
    mediaItems.displayValue = false;

    // Get information from API
    this.deleteDataService.deleteData(this.setVariableService.payload, this.setVariableService.headers, this.setVariableService.apiURL)
    .subscribe({
      next: (response) => {
        // Next is for successful response message only
        // Set the loader to false to not display on page
        mediaItems.isPressedButton = false;

        // Set the display value to true to display the data
        mediaItems.displayValue = true;

        // Check which button the end user is clicking and set spinner
        if (methodValue === "Delete") {
          mediaItems.buttonDeleteIsLoading = false;
        }

        // Convert object to JSON string
        let responseJSONMessage = JSON.stringify(response);

        // Parse JSON String to object
        let responseMessage = JSON.parse(responseJSONMessage);

        // Retrieve the response message to keep or remove a specific row
        mediaItems.statusResponse = responseMessage.Result[0].Status;
        mediaItems.messageResponse = responseMessage.Result[0].Message;

        // Check if the return status message is success
        if (mediaItems.statusResponse === 'Success') {
          // Remove row from view
          this.removeField(row);
        }
      },
      // complete: () => {
      //   // Complete is for successful calls only
      // },
      error: err => {
        // Error is for subscription error calls only
        // Set the loader to false to not display on page
        mediaItems.isPressedButton = false;

        // Check which button the end user is clicking and set spinner
        if (methodValue === "Delete") {
          mediaItems.buttonDeleteIsLoading = false;
        }

        // Set error status, message, and okay message
        mediaItems.statusValue = err.status;
        mediaItems.messageValue = err.statusText;
        mediaItems.okValue = !err.ok;
      }
    });
  }
}
