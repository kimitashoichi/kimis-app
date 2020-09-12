import firebase from '../utils/firebase';
import * as Models from '../models/ideaModel';

// 投稿処理
export const postIdea = async (data: Models.PostIdea) => {
  try {
    await firebase
    .firestore()
    .collection('Idea')
    .doc()
    .set(data)
    .catch((error) => {
      console.log('postIdea Error Firebase')
      throw new Error(error.message);
    })
    const success = { success: 'PostIdea 200 ok' };
    return { success }
  } catch(error) {
    console.log('postIdea Error')
    return { error }
  }
};

// 下書き投稿処理
export const postDraftIdea = async (data: Models.PostIdea) => {
  try {
    console.log(data)
    await firebase
    .firestore()
    .collection('DraftIdea')
    .doc()
    .set(data)
    .catch((error) => {
      console.log('postDraftIdea Error Firebase')
      throw new Error(error.message);
    })
    const success = { success: 'PostIdea 200 ok' };
    return { success }
  } catch(error) {
    console.log('postDraftIdea Error')
    return { error }
  }
};

// IDによるデータ取得
export const getIdeabyId = async (ideaId: string) => {
  try {
    let idea = null;
    await firebase
    .firestore()
    .collection('Idea')
    .doc(ideaId)
    .get()
    .then(doc => {
      if(!doc.exists) {
        console.log('none data getIdeaById firebase');
        return;
      }
      const data = Object.assign({}, doc.data());
      data.createdAt = data.createdAt.toDate();
      data.updatedAt = data.updatedAt.toDate();
      idea = data;
    }).catch(error => {
      console.log('Error getIdeaById firebase');
      throw new Error(error.message);
    })
    return { idea };
  } catch(error) {
    console.log('Error getIdeaById ');
    return (error)
  }
} 


