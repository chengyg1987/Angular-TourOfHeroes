//需要从angular核心库种导入Component符号
import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MessageService } from '../message.service';


//并为组建类加上@Component装饰器
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
//始终要export这个组件类，以便在其他地方导入他
export class HeroesComponent implements OnInit {

  //添加一个 hero 属性，用来表示一个名叫 “Windstorm” 的英雄
  //hero:Hero={ id : 1,name:'Windstorm'};
  heroes:Hero[]=[];  //定义为一个简单的声明

  /*selectedHero?:Hero;
  onSelected(hero:Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }*/

  constructor(private heroService: HeroService,private messageService: MessageService) { }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    /*上一个版本把英雄的数组赋值给了该组件的 heroes 属性。这种赋值是同步的，这里包含的假设是服务器能立即返回英雄数组或者浏览器能在等待服务器响应时冻结界面。
    当 HeroService 真的向远端服务器发起请求时，这种方式就行不通了。
    新的版本等待 Observable 发出这个英雄数组，这可能立即发生，也可能会在几分钟之后。然后，subscribe() 方法把这个英雄数组传给这个回调函数，该函数把英雄数组赋值给组件的 heroes 属性。
    使用这种异步方式，当 HeroService 从远端服务器获取英雄数据时，就可以工作了
    */
    this.heroService.getHeroes()
      .subscribe(heroes2 => this.heroes = heroes2);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
