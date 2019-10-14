import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
