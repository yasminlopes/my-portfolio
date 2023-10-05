import { Component, DestroyRef, HostListener, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LANGUAGE_DROPDOWN_ITEMS } from '../../models/navbar.model';
import {
  ButtonDropdownComponent,
  ItemDropdown,
} from 'src/app/shared/components/button-dropdown/button-dropdown.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { IpApiService } from 'src/app/shared/services/ip-api/ip-api.service';
import { HttpClient } from '@angular/common/http';
import { FileDownloadService } from 'src/app/shared/services/file-download/file-download.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgOptimizedImage,
    ButtonDropdownComponent,
    TranslateModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public languageDropdown = LANGUAGE_DROPDOWN_ITEMS;
  public isMenuOpen: boolean = false;

  private _currentLanguage: string = 'br';
  private resumeArchiveName: string = 'dev_yasmin_lopes_cv';
  private _isMobile = false;

  constructor(
    private _translate: TranslateService,
    private _apiService: IpApiService,
    private _fileDownloadService: FileDownloadService,
    private _destroyRef: DestroyRef,
  ) {}

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  async ngOnInit() {
    await this.setLanguage();
  }

  private async setLanguage() {
    const ipInfo$ = this._apiService.getIpInfo();
    const ipInfo = await lastValueFrom(ipInfo$);

    this._translate.setDefaultLang('en');

    if (ipInfo?.country_code?.toUpperCase() == 'BR') {
      this._translate.setDefaultLang('pt');
      this._currentLanguage = 'pt';
    }
  }

  public executeEventDropdown(item: ItemDropdown) {
    this[item.onClickFunction](item, item.value);
  }

  private changeToEnglish(): void {
    this._translate.use('en');
    this._currentLanguage = 'en';
  }

  private changeToPortuguese(): void {
    this._translate.use('pt');
    this._currentLanguage = 'pt';
  }
  

  private downloadResume() {
    this._fileDownloadService
      .downloadFile(`assets/cv/${this.resumeArchiveName}.pdf`)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = this.resumeArchiveName;
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      });
  }

  private openResumeInNewTab() {
    this._fileDownloadService
      .downloadFile(`assets/cv/${this.resumeArchiveName}.pdf`)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((blob) => {
        const url = window.URL.createObjectURL(blob);
  
        window.open(url, '_blank');
  
        window.URL.revokeObjectURL(url);
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._isMobile = window.innerWidth <= 768;
  }

  public downloadOrOpenFile() {
    if (this._isMobile) {
      this.downloadResume();
    } else {
      this.openResumeInNewTab();
    }
  }
  
}
