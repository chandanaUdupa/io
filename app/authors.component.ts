import {Component} from'@angular/core';
import {AuthorService} from "./author.service";
import { userInterface } from './user.interface';
import { Http ,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'authors',
    template: `
    `
})


export class AuthorsComponent {
    title = "Title for the authors page"
    user: userInterface;

    constructor(private authorService: AuthorService){

    }

    onClick(){
        this.authorService.postLogin(this.user);
    }

}