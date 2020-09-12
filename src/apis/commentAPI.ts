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
}