import firebase from '../utils/firebase';
import * as Models from '../models/commentModel';

export const createComment = async (data: Models.Comment) => {
  try {
    await firebase
    .firestore()
    .collection('comments')
    .doc()
    .set(data)
    .catch(error => {
      throw new Error(error.message);
    })
    const success = { success: 'Crested Comment 200'};
    return { success };
  } catch(error) {
    return { error };
  };
};

export const getCommentbyId = async (id: string) => {
  try {
    let comment = null;
    await firebase
    .firestore()
    .collection('comments')
    .doc(id)
    .get()
    .then(doc => {
      if(!doc.exists) {
        console.log('comment dose not exist');
        return;
      }
      const data = Object.assign({}, doc.data());
      data.createdAt = data.createdAt.toDate();
      comment = data;
    }).catch(error => {
      throw new Error(error.message);
    })
    return { comment };
  } catch(error) {
    return { error };
  }
}

export const getAllComment = async () => {
  try {
    const comments: Models.Comment[] = [];
    await firebase
    .firestore()
    .collection('comments')
    .get()
    .then(snapShot => {
      if(snapShot.empty) {
        console.log('comment dose not exist');
        return;
      }
      snapShot.forEach(com => {
        comments.push({
          content: com.data().content ? com.data().content : 'no content',
          userName: com.data().userName ? com.data().userName: 'no author',
          createdAt: com.data().createdAt ? com.data().createdAt.toDate() : null
        });
      });
    }).catch(error => {
      throw new Error(error.message);
    })
    return { comments };
  } catch(error) {
    return { error };
  }
}