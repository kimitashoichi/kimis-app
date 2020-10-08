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


//  これが今現在使用されているコメント取得処理
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
      snapShot.forEach(doc => {
        comments.push({
          userId: doc.data().userId ? doc.data().userId: 'dummyUserId',
          ideaId: doc.data().ideaId ? doc.data().ideaId : 'dummyIdeaId',
          content: doc.data().content ? doc.data().content : 'no content',
          userName: doc.data().userName ? doc.data().userName: 'no author',
          createdAt: doc.data().createdAt ? doc.data().createdAt.toDate() : null
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