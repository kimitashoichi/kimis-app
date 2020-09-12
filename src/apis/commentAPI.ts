import firebase from '../utils/firebase';
import * as Models from '../models/commentModel';

export const createComment = async (data: Models.Comment) => {
  try {
    await firebase
    .firestore()
    .collection('')
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