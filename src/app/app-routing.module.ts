/**ng generate module app-routing --flat --module=app   

参数详情
--flat 	把这个文件放进了 src/app 中，而不是单独的目录中。
--module=app 	告诉 CLI 把它注册到 AppModule 的 imports 数组中。 
*/

//app-routing.module.ts 会导入 RouterModule 和 Routes，以便该应用具有路由功能。配置好路由后，接着导入 HeroesComponent，它将告诉路由器要去什么地方。
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: "heroes", component:HeroesComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },//path 中的冒号（:）表示 :id 是一个占位符，它表示某个特定英雄的 id。
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }//默认导航首页
];

/**@NgModule 元数据会初始化路由器，并开始监听浏览器地址的变化。
下面的代码行将 RouterModule 添加到 AppRoutingModule 的 imports 数组中，同时通过调用 RouterModule.forRoot() 来用这些 routes 配置它： 
这个方法之所以叫 forRoot()，是因为你要在应用的顶层配置这个路由器。forRoot() 方法会提供路由所需的服务提供者和指令，还会基于浏览器的当前 URL 执行首次导航。
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]//AppRoutingModule 导出 RouterModule，以便它在整个应用程序中生效。
})
export class AppRoutingModule { }
