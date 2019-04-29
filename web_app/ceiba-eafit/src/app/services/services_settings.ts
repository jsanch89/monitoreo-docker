import { Injectable } from '@angular/core';

const CONFIG ={
apiUrl:'http://express:3000' // aqui se cambia por la url de heroku
};

@Injectable()
export class ServicesSettings {

  constructor() {}
  
    public getApiUrl(){
      return CONFIG.apiUrl;
    }

}