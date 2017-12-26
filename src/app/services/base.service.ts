import { IDataResult } from './../models/DataResult';
import { Injectable } from "@angular/core";
import { Http, RequestOptionsArgs } from '@angular/http';


@Injectable()
export class BaseService {
    private BASE_URL: string = `api/`;

    constructor(public http: Http) { }

    public httpGet(url: string): Promise<IDataResult> {
        return this.http.get(this.BASE_URL + url).toPromise().then(response => {
            return response.json() as IDataResult;
        })
    }

    public httpPost(url: string, model: any, options?: RequestOptionsArgs): Promise<IDataResult> {
        return this.http.post(this.BASE_URL + url, model).toPromise().then(response => {
            return response.json() as IDataResult;
        });
    }
}