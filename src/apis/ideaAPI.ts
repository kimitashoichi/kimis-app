import { db } from '../utils/firebase';
import * as Models from '../models/ideaModel';

// 投稿処理
export const postIdea = async (data: Models.PostIdea) => {
  try {
    await db
    .collection('test')
    .doc()
    .set(data)
    .catch((error) => {
      throw new Error(error.message);
    })
    const success = { success: 'PostIdea 200 ok' };
    return { success }
  } catch(error) {
    return { error }
  }
};


