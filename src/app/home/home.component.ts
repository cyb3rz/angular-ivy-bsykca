import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    user: User;
    will: any;
    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(user => {
            this.loading = false;
            this.user = user;
            // console.log(this.user);
        });

        this.userService.getWill().pipe().subscribe(will => {
          this.loading = false;
          this.will = will;
          console.log(this.will);
      });


    }
}
