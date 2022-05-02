import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { TestPage } from './pages/test-page/test-page';

const routes: Routes = [
  {path: "", component: HomePage },
  {path: "test", component: TestPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
