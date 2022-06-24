import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { QueryService } from 'src/app/services/query/query.service';
import { ReplyModalPage } from '../reply-modal/reply-modal.page';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.page.html',
  styleUrls: ['./queries.page.scss']
})
export class QueriesPage implements OnInit {
  title='Queries'

  constructor(
    private queryService: QueryService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }
  ques:any
  queryObservable: Observable<any[]>;

  ngOnInit() {
    this.queryObservable = this.queryService.getQuery()
    // this.queryService.getQuery().subscribe(res=>{
    //     console.log('query',res)
    // })
  }

  async replyQuery(queryData){
    const modal = await this.modalCtrl.create({
      component: ReplyModalPage,
      componentProps:{queryData:queryData}
    })
    await modal.present()
  }
  
  delQuery(itemId:string){
    this.queryService.deleteQuery(itemId).then(res=>{
      this.showAlert("success",res)
    }).catch(err=>{
      this.showAlert("error",err)
    })
  }

  formatDate(str){
    return this.queryService.formatDate(str)
  }

  async showAlert(msg:string,err:any){
    if (msg == "success") {
      let deletedRes=await this.alertCtrl.create({
        header:'Deleted',
        message:'Data has be Deleted Successfully',
        buttons:['Close']
      })
      deletedRes.present()
    } else if (msg=="error") {
      let errorRes= await this.alertCtrl.create({
        header:'Delete Failed',
        message:`Error: ${err}`,
        buttons:['Close']
      })
      errorRes.present()
    }
  }
}
