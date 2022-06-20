import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  queryCollection: AngularFirestoreCollection;
  constructor(
    private afs:AngularFirestore
  ) { 
    this.queryCollection=this.afs.collection('query')
  }

  getQuery(){
    return this.queryCollection.valueChanges({idField:'idField'});
  }
}
