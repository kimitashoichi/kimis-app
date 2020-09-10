import firebase from '../utils/firebase';
import * as Models from '../models/ideaModel';

// 投稿処理
export const postIdea = async (data: Models.PostIdea) => {
  try {
    console.log(data)
    await firebase
    .firestore()
    .collection('Idea')
    .doc()
    .set(data)
    .catch((error) => {
      console.log('error')
      throw new Error(error.message);
    })
    const success = { success: 'PostIdea 200 ok' };
    return { success }
  } catch(error) {
    console.log('error1')
    return { error }
  }
};

export const postDraftIdea = async (data: Models.PostIdea) => {
  try {
    console.log(data)
    await firebase
    .firestore()
    .collection('DraftIdea')
    .doc()
    .set(data)
    .catch((error) => {
      console.log('error')
      throw new Error(error.message);
    })
    const success = { success: 'PostIdea 200 ok' };
    return { success }
  } catch(error) {
    console.log('error1')
    return { error }
  }
};


