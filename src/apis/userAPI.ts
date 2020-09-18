import firebase from '../utils/firebase';
import * as Models from '../models/userModels';
import { firestore } from 'firebase';

function setUserInfo(fuser: firebase.User | null): Models.LoginUser | null {
  if (!fuser) {
      return null;
  }
  return {
    userId: fuser.uid,
    email: fuser.email ? fuser.email : '',
    displayName: fuser.displayName ? fuser.displayName : '',
    phoneNumber: fuser.phoneNumber ? fuser.phoneNumber : '',
    userName: fuser.displayName ? fuser.displayName : '',
  }
}

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
    return { userInfromation };
  } catch(error) {
    return { error }
  };
};

export const userLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    let loginUser = null;
    await firebase
    .auth()
    .signInWithPopup(provider)
    .then((user) => {
      if(!user) {
        return;
      }
      const data = Object.assign({}, setUserInfo(user.user));
      firstUserSignUp(data);
      loginUser = data;
    }).catch(error => {
      throw new Error(error.message);
    })
    return { loginUser };
  } catch(error) {
    return { error };
  };
};

// create user model
export const firstUserSignUp = async(data: Models.LoginUser) => {
  try {
    let flag: boolean = true;

    // check already signup user
    await firebase
    .firestore()
    .collection('users')
    .doc(data.userId)
    .get()
    .then(userData => {
      if(userData.exists){
        flag = false;
      }
    })

    // create user model
    if(flag) {
      await firebase
      .firestore()
      .collection('users')
      .doc(data.userId)
      .set(data)
      .catch(error => {
        throw new Error(error.message);
      })
    }

    const success = {success: '200 OK firstUserSignUp API'};
    return { success };
  } catch(error) {
    return { error }; 
  }
}

export const loginCheck = async () => {
  try {
    let loginUser = null;
    await firebase
    .auth()
    .onAuthStateChanged(user => {
      if(!user) {
        return;
      }
      const data = Object.assign({}, setUserInfo(user));
      loginUser = data;
      console.log(loginUser, 'login check user');
    })
    return { loginUser };
  } catch(error) {
    return { error };
  }
}

export const userLogout = async () => {
  try {
    await firebase
    .auth()
    .signOut()
    .then(info => {
      console.log('user Logout API', info)
    }).catch(error => {
      throw new Error(error.message);
    })
    const success = { success: 'Logout User OK'}
    return { success };
  } catch(error) {
    return { error };
  };
};

export const editProfile = async (data: Models.LoginUser) => {
  console.log(data, 'editProfile Data');
  try {
    await firebase
    .firestore()
    .collection('users')
    .doc(data.userId)
    .update(data)
    .catch(error => {
      throw new Error(error.message);
    })
    
    const success = {success: '200 OK: editProfile API'};
    return { success };
  } catch(error) {
    return { error }
  }
};