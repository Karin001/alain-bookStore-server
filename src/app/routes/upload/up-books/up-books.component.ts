import { Component, OnInit } from '@angular/core';
import { UploadFile, NzMessageService } from 'ng-zorro-antd';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-up-books',
  templateUrl: './up-books.component.html',
  styles: []
})
export class UpBooksComponent implements OnInit {
  validateForm:FormGroup;
  uploading = false;
  file: UploadFile;
  loading = false;
  imgUrl: string;
  beforeUpload = (file: UploadFile): boolean => {
    
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      this.msg.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.msg.error('Image must smaller than 2MB!');
    }
    this.file = file;
    console.log(file)
    setTimeout(() => {
      this.getBase64(file.originFileObj, (img: string) => {
        this.loading = false;
        this.imgUrl = img;
        console.log('url',this.imgUrl)
      });
    }, 1000);
    
    return true;
  }
  constructor(
    private http: HttpClient, 
    private msg: NzMessageService,
    public fb:FormBuilder
    ) {}

  
  
  ngOnInit() {
    this.creatForm()
  }
  creatForm(){
      this.validateForm = this.fb.group({
        bookname     : [ null,[Validators.required] ],
        author       : [ null,[Validators.required] ],
        description  : [ null,[Validators.required]],
        mulu         : [ null,],
        publishDate  : [ null],
        publisher    : [ null,]
      });
    
  }
  private getBase64(img: File, callback: (img: {}) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  handleChange(info: { file: UploadFile }): void {
    console.log(info.file)
   
   
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, (img: string) => {
        this.loading = false;
        this.imgUrl = img;
        console.log('url',this.imgUrl)
      });
    
  }
  handleUpload(){}
}
