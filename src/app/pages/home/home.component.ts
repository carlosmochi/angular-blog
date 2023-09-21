import { Component, OnInit } from '@angular/core';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bigCardArticleData:Article = {
    id: "0",
    photo: "",
    title: "",
    description: ""
  };
  smallCardArticleData:Article[] = [];

  constructor(){
    this.bigCardArticleData = {
      id: dataFake[0].id.toString(),
      photo: dataFake[0].photo,
      title: dataFake[0].title,
      description: dataFake[0].description
    };
    for(let i = 1; i < dataFake.length; i++){
      this.smallCardArticleData.push({
        id: dataFake[i].id.toString(),
        photo: dataFake[i].photo,
        title: dataFake[i].title,
        description: dataFake[i].description
      })
    }
    console.log(this.bigCardArticleData);
    
  }

  ngOnInit(): void {
      console.log(this.bigCardArticleData);
      console.log(this.smallCardArticleData);
      
      
  }
}

class Article{
  id:string
  photo:string
  title:string
  description:string

  constructor(id:string, photo:string, title:string, description:string){
    this.id = id;
    this.photo = photo;
    this.title = title;
    this.description = description;
  }

}
