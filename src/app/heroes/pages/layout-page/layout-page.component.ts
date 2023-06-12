import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth-service.service';
import { User } from 'src/app/auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'heroes-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
    `
    .spacer{
      flex: 1 1 auto;
    }
    `
  ]
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Listado', icon:'label',  url: './list' },
    { label: 'Añadir',  icon:'add',    url: './new-hero' },
    { label: 'Buscar',  icon:'search', url: './search' },
  ]

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  get user(): User | undefined{
    return this.authService.currentUser;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
