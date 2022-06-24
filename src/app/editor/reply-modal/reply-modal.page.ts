import { Component, Input, OnInit } from '@angular/core';
import { serverTimestamp } from '@angular/fire/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { QueryService } from 'src/app/services/query/query.service';

@Component({
  selector: 'app-reply-modal',
  templateUrl: './reply-modal.page.html',
  styleUrls: ['./reply-modal.page.scss'],
})
export class ReplyModalPage implements OnInit {

  @Input() queryData:any
  queryTime:string
  replyForm: any;
  constructor(
    private modalCtrl: ModalController,
    private queryService : QueryService,
    public formBuilder: FormBuilder
  ) { }
  
  ngOnInit() {
    // this.queryTime= this.queryData.createdAt.toDate().toString().slice(4, 24)
    this.queryTime = this.queryService.formatDate(this.queryData.createdAt)    
    this.replyForm = this.formBuilder.group({
      answer:[this.queryData.answer, [ Validators.minLength(5), Validators.pattern('^[a-zA-Z 0-9\.\, \n]*$'),Validators.required]],
      answeredBy:[this.queryData.answeredBy, [Validators.minLength(5), Validators.pattern('^[a-zA-Z0-9 ]*$'),Validators.required]],
      answeredAt:[serverTimestamp()],
      displayFaq:[this.displayStatus(this.queryData.displayFaq)]
    })
  }
  
  dismissModal(){
    this.modalCtrl.dismiss()
  }
  displayStatus(val){
    if (val==true) {
      return true
    } else {
      return false
    }
  }
  submitForm(){
    this.queryService.updateData(this.queryData.idField, this.replyForm.value)
    console.log(this.replyForm.value)
  }

  get errorControl() {
    return this.replyForm.controls;
  }
  get answer(){
    return this.replyForm.get('answer')
  }
  get answeredBy(){
    return this.replyForm.get('answeredBy')
  }
}
