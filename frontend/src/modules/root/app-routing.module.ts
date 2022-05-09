import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'openfyle',
          loadChildren: () =>
            import('../demo/demo.module').then((m) => m.DemoModule),
        },
        { path: '', redirectTo: 'openfyle/demo/', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent },
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
