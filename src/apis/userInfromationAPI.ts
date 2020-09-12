import firebase from '../utils/firebase';
import * as Models from '../models/userModels';

export const getUserInfromation = async (uid: string) => {
  try {
    let userInfromation = null;
    await firebase
    .firestore()
    .collection('users')
    .doc(uid)
    .get()
    .then(doc => {
      if(!doc.exists) {
        return;
      }
      const data = Object.assign({}, doc.data());
      userInfromation = data;
    }).catch(error => {
      throw new Error(error.message);
    });
    console.log(userInfromation, 'userInfromation')
    return { userInfromation };
  } catch(error) {
    return { error }
  };
};