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

export const getAllComment = async (ideaId: string) => {
  try {
    console.log('idea Id API', ideaId);
    const comments: Models.GetCommentState[] = [];
    await firebase
    .firestore()
    .collection('comments')
    .where('ideaId', '==', ideaId)
    .get()
    .then(snapShot => {
      if(snapShot.empty) {
        console.log('comment dose not exist');
        return;
      }
      snapShot.forEach(doc => {
        comments.push({
          commentId: doc.id,
          userId: doc.data().userId,
          ideaId: doc.data().ideaId,
          content: doc.data().content,
          userName: doc.data().userName,
          createdAt: doc.data().createdAt
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

export const deleteComment = async(commentId: string) => 
{
  console.log('comment delete API', commentId)
  try {
    await firebase
    .firestore()
    .collection('comments')
    .doc(commentId)
    .delete()
    .catch(error => {
      throw new Error(error.message);
    })
    const success = {success: '200 OK, success'};
    return {success}
  } catch(error) {
    return {error}
  }
}