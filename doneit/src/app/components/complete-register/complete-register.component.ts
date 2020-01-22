import { Component, OnInit } from '@angular/core';
import { PersonalCard } from 'src/app/models/personal-card/personal-card';
import { NgxImageCompressService, DOC_ORIENTATION } from 'ngx-image-compress';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-complete-register',
  templateUrl: './complete-register.component.html',
  styleUrls: ['./complete-register.component.css']
})
export class CompleteRegisterComponent implements OnInit {

  private url = "https://www.publicdomainpictures.net/pictures/40000/nahled/question-mark.jpg";
  private file: File
  private personalCard = new PersonalCard()
  imgResultBeforeCompress: string;
  imgResultAfterCompress: string;

  constructor(private imageCompress: NgxImageCompressService, private registerService: RegisterService) { }

  ngOnInit() {
  }

  public compressFile(image) {

    this.imgResultBeforeCompress = image;
    console.warn('Size in bytes was:', this.imageCompress.byteCount(image));

    this.imageCompress.compressFile(image, DOC_ORIENTATION, 50, 50).then(
      result => {
        this.imgResultAfterCompress = result;
        this.url = this.imgResultAfterCompress;
        console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
      }
    );
  }


  public addFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0]
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
        this.compressFile(this.url)
        this.getBase64ImageFromUrl(this.url)
          .then(
            result => this.handleResult(result)
          )
          .catch(err => console.error(err));
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  async getBase64ImageFromUrl(imageUrl) {
    var res = await fetch(imageUrl);
    var blob = await res.blob();

    return new Promise((resolve, reject) => {
      var reader = new FileReader();
      reader.addEventListener("load", function () {
        resolve(reader.result);
      }, false);

      reader.onerror = () => {
        return reject(this);
      };
      reader.readAsDataURL(blob);
    })
  }

  handleReaderLoaded(e) {
    this.personalCard.base64StringImage = 'data:image/png;base64,' + btoa(e.target.result);
  }

  handleResult(result) {
    this.personalCard.base64StringImage = String(result)
    console.log(this.personalCard)
  }


  completeRegister() {
    this.registerService.completeUserRegister(this.personalCard).subscribe(
      result => {
        console.log("OK")
      },
      error => {
        console.log("NO OK")
      }
    )
  }

}
