import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { OperationModel } from '../shared/operation-model';

@Injectable()
export class OperationService {

  public data: OperationModel[];

  constructor(private http: Http) { 
    this.http.get("./data/mt06.json")
                    .map(this.extractData)
                    .catch(this.handleError)
                    .subscribe(res => this.data = res);
  }

  public getOperations(): OperationModel[] {
    return this.data;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body as OperationModel[];
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
