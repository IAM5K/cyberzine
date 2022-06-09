import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamCollection: AngularFirestoreCollection;
  teamCollectionGroup: AngularFirestoreCollectionGroup
  constructor(
    private afs:AngularFirestore
  ) { 
    this.teamCollection=this.afs.collection('teams')
    this.teamCollectionGroup=this.afs.collectionGroup('teams')
  }

  getTeams(year){
    return this.teamCollection.doc(year).collection('members').valueChanges();
    // return this.teamCollectionGroup.valueChanges();
  }
  addMember(value){
    this.teamCollection.doc('2021')
    .collection('members').add(value).then(res=>{
      console.log("Submitted Successfully!")
    }).catch(err=>{
      console.log(err);
    })
    // this.teamCollection.doc('2021').set(value).then(res=>{
    //   console.log("Submitted Successfully!")
    // }).catch(err=>{
    //   console.log(err);
    // })
  }
}
