import { Injectable } from '@angular/core';

const CONFIG ={
apiUrl:'http://52.206.230.227:3000' // aqui se cambia por la url de heroku
};

@Injectable()
export class ServicesSettings {

  constructor() {}
  
    public getApiUrl(){
      return CONFIG.apiUrl;
    }

}