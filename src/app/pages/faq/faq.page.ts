import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { QueryService } from 'src/app/services/query/query.service';
import { serverTimestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {
  title="FAQ"
  queryForm: FormGroup;
  queryCollection: AngularFirestoreCollection;
  isSubmitted = false;

  constructor(
    private afs:AngularFirestore,
    private queryService: QueryService,
    public formBuilder: FormBuilder
  ){ 
    this.queryCollection=this.afs.collection('query')
  }

  ngOnInit() {
    this.queryForm = this.formBuilder.group({
      createdAt:[serverTimestamp()],
      name: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      sub: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z 0-9 ]*$')]],
      msg: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z 0-9 ]*$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(10), Validators.maxLength(10)]],
      answer:['', [ Validators.minLength(5), Validators.pattern('^[a-zA-Z 0-9]*$')]],
      answeredBy:['', [Validators.minLength(5), Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      answeredAt:['']
    })

    // console.log(fs.FieldValue.serverTimestamp())
    // this.postQuery(this.inputQuery)
    // this.queryService.getQuery().subscribe(res=>{
    //   console.log('query',res)
    // })

  }

  
  get errorControl() {
    return this.queryForm.controls;
  }
  get email(){
    return this.queryForm.get('email')
  }
  get name(){
    return this.queryForm.get('name')
  }
  get mobile(){
    return this.queryForm.get('mobile')
  }
  get sub(){
    return this.queryForm.get('sub')
  }
  get msg(){
    return this.queryForm.get('msg')
  }


  submitForm() {
    if (!this.queryForm.valid) {
      alert('Please provide all the required values!')
      return false;
    } else {
    console.log(this.queryForm.value)
    this.postQuery(this.queryForm.value)
    // this.queryService.getQuery().subscribe(res=>{
    //   console.log('query',res)
    // })

    }
  }

  postQuery(value){
    this.queryCollection.add(value).then(res=>{
      this.queryForm.reset( {} )
      this.isSubmitted=true
      setTimeout(() => {  
      this.isSubmitted=false
      }, 15000);
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

  submitQuery(inputData){
    console.log("Submitted:"+inputData)
  }

}
