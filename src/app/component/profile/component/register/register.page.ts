import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/component/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public type: string = '';
  public title = 'Form Pendaftaran';
  public isRincian: boolean = false;
  public registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  public form() {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        alamat: ['', Validators.required],
        nomorTelepon: [
          '',
          [Validators.required, Validators.pattern('^[0-9]+$')],
        ],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.mustMatch('password', 'confirmPassword'),
      }
    );
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  public async submitRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { email, password, username, alamat, nomorTelepon } =
      this.registerForm.value;
    try {
      await this.authService
        .register(email, password, username, alamat, nomorTelepon)
        .toPromise();
      this.router.navigate(['confirmation'], {
        queryParams: {
          status: 'Register Berhasil',
          url: 'login',
          text: 'Login',
          type: 'Check',
        },
      });
    } catch (error) {
      this.router.navigate(['confirmation'], {
        queryParams: {
          status: 'Register Gagal',
          url: 'login',
          text: 'Login',
          type: 'Fail',
        },
      });
    }
  }

  ngOnInit() {
    this.form();
    this.route.queryParams.subscribe((params) => {
      this.type = params['type'];
      if (this.type === 'lihat') {
        this.isRincian = true;
        this.title = 'Rincian Profile';
      } else {
        this.isRincian = false;
        this.title = 'Form Pendaftaran';
      }
    });
  }
}
