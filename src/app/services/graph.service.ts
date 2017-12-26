import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BaseService } from "./base.service";


@Injectable()
export class GraphService extends BaseService {

    private url = "Charts/BuildingsSpaceCorrelate";

    constructor(http: Http) {
        super(http);
    }

    getAll()
    {
        var url=`${this.url}?time=${new Date()}`;
        return this.httpGet(url);
    }
}