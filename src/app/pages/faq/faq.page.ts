import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { QueryService } from 'src/app/services/query/query.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  title="FAQ"

  queryCollection: AngularFirestoreCollection;
  constructor(
    private afs:AngularFirestore,
    private queryService: QueryService
  ) { 
    this.queryCollection=this.afs.collection('query')
  }

  inputQuery={
    name:"pqr",
    email:"pqr@gmail.com",
    subject:"Test Subject",
    message:"This is a test message"
  }

  postQuery(value){
    this.queryCollection.add(value).then(res=>{
      alert("Submitted Successfully!")
    }).catch(err=>{
      console.log(err);
    })
  }
  updateQuery(value){
    this.queryCollection.add(value).then(res=>{
      alert("Submitted Successfully!")
    }).catch(err=>{
      console.log(err);
    })
  }

  ngOnInit() {
    // this.postQuery(this.inputQuery)
    // this.queryService.getQuery().subscribe(res=>{
    //   console.log('query',res)
    // })

  }

}
