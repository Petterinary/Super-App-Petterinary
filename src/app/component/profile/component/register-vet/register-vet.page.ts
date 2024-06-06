import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/component/service/auth.service';

@Component({
  selector: 'app-register-vet',
  templateUrl: './register-vet.page.html',
  styleUrls: ['./register-vet.page.scss'],
})
export class RegisterVetPage implements OnInit {
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
        nomorTelepon: [
          '',
          [Validators.required, Validators.pattern('^[0-9]+$')],
        ],
        tempatPraktik: ['', Validators.required],
        jadwalPraktik: ['', Validators.required],
        lamaPengalaman: ['', [Validators.required]],
        specialisasiHewan: ['', Validators.required],
        password: ['', [Validators.required]],
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

    const {
      email,
      password,
      username,
      tempatPraktik,
      jadwalPraktik,
      lamaPengalaman,
      specialisasiHewan,
      nomorTelepon,
    } = this.registerForm.value;
    try {
      await this.authService
        .registerDoctors(
          email,
          password,
          username,
          tempatPraktik,
          jadwalPraktik,
          lamaPengalaman,
          specialisasiHewan,
          nomorTelepon
        )
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
          url: 'register',
          text: 'Coba Lagi',
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
