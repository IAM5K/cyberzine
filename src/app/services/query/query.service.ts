import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  queryCollection: AngularFirestoreCollection;
  queryDoc: AngularFirestoreDocument;


  constructor(
    private afs:AngularFirestore
  ) { 
    this.queryCollection=this.afs.collection('query',ref => ref.orderBy('createdAt', 'desc'))
  }

  getQuery(){
    return this.queryCollection.valueChanges({idField:'idField'});
  }
  updateData(idField,data){
    this.afs.doc(`query/${idField}`).update(data)
    .then(() => console.log('success') )
    .catch(err => console.log(err) )
  }
  deleteQuery(itemId:string,){
    this.queryDoc= this.afs.doc(`query/${itemId}`)
    return this.queryDoc.delete()
  }


  formatDate(str){
    if(str == (null|| undefined)){
      return false
    }
    else{
      return str.toDate().toString().slice(4, 24)
    }
  }
}
