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


// 今回はこれは使用しない定数関数になりそう
// 一回実装してみてテストして使用しなければ全削除する
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