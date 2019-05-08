import { Injectable } from "@angular/core";
import { APPLICATION_CONSTANTS } from '../../assets/constants/constants';

@Injectable({
    providedIn: 'root'
})

export class AppService{
    constructor(){}
    getConstantData (key){
        return APPLICATION_CONSTANTS[key];
    }
}