import firebase from '../utils/firebase';
import * as Models from '../models/ideaModel';

// 投稿処理
export const postIdea = async (data: Models.PostIdea) => {
  try {
    await firebase
    .firestore()
    .collection('AllIdea')
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

// 投稿の編集
export const updateIdea = async(data: Models.PostIdea) => {
  try {
    console.log(data);
    await firebase
    .firestore()
    .collection('AllIdea')
    .doc(data.ideaId)
    .update(data)
    .catch(error => {
      throw new Error(error.message)
    });
    const success = {success: "200 ok, success"}
    return {success};
  } catch (error) {
    return { error };
  }
}

// 投稿の削除
export const deleteIdea = async(ideaId: string) => {
  try {
    console.log(ideaId)
    await firebase
    .firestore()
    .collection('AllIdea')
    .doc(ideaId)
    .delete()
    .catch(error => {
      throw new Error(error.message)
    });
    const success = {success: "200 ok, success"}
    return {success};
  } catch (error) {
    return { error };
  }
}

// IDによるデータ取得
export const getIdeabyId = async (ideaId: string) => {
  try {
    let idea = null;
    await firebase
    .firestore()
    .collection('AllIdea')
    .doc(ideaId)
    .get()
    .then(doc => {
      if(!doc.exists) {
        console.log('none data getIdeaById firebase');
        return;
      }
      const data = Object.assign({}, doc.data());
      data.createdAt = data.createdAt.toDate();
      data.updatedAt = data.updatedAt ? data.updatedAt.toDate() : null;
      data.ideaId = doc.id;
      console.log(doc.id)
      idea = data;
      console.log(idea)
    }).catch(error => {
      console.log('Error getIdeaById firebase');
      throw new Error(error.message);
    })
    return { idea };
  } catch(error) {
    console.log('Error getIdeaById ');
    return (error)
  }
};

// いいね機能
export const changeGoodCount = async (id: string) => {
  try {
    let currentCount = 0;

    // // いいね数を更新したい投稿の取得処理
    await firebase
    .firestore()
    .collection('AllIdea')
    .doc(id)
    .get()
    .then(doc => {
      if(!doc.exists) {
        throw new Error();
      }
      const data = Object.assign({}, doc.data());
      currentCount = data.goodCount;
    }).catch(error => {
      throw new Error(error.message);
    });

    // いいね数の更新処理
    await firebase
    .firestore()
    .collection('AllIdea')
    .doc(id)
    .update({
      goodCount: currentCount + 1
    }).catch(error => {
      throw new Error(error.message);
    });
    const success = { success: "OK change good count"};
    return { success };
  } catch(error) {
    return { error };
  };
};

// アイディアの全件取得
export const getIdeasByLatest = async () => {
  try {
    const ideas: Models.PostIdea[] = [];
    await firebase
    .firestore()
    .collection('AllIdea')
    .where('postFlag', '==', true)
    .get()
    .then(snapShot => {
      if(snapShot.empty){
        return;
      }
      snapShot.forEach(doc => {
        console.log('doc', doc.data());
        ideas.push({
          ideaId: doc.id,
          uid: doc.data().uid ? doc.data().uid : 'empty',
          authorName: doc.data().authorName ? doc.data().authorName : 'no author',
          title: doc.data().title ? doc.data().title : 'not title',
          content: doc.data().content,
          postFlag: doc.data().postFlag,
          createdAt: doc.data().createdAt.toDate(),
          updatedAt: doc.data().updatedAt ? doc.data().updatedAt.toDate() : null,
          goodCount: doc.data().goodCount ? doc.data().goodCount : null
        });
      });
    }).catch(error => {
      throw new Error(error.message);
    })
    return { ideas };
  } catch(error) {
    return { error };
  }
};

// アイディアのいいね順取得
export const getIdeasByGood = async () => {
  try {
    const ideas: Models.PostIdea[] = [];
    await firebase
    .firestore()
    .collection('AllIdea')
    .orderBy('goodCount', 'desc')
    .get()
    .then(snapShot => {
      if(snapShot.empty){
        return;
      }
      console.log('snapShot', snapShot)
      snapShot.forEach(doc => {
        ideas.push({
          ideaId: doc.id,
          title: doc.data().title ? doc.data().title : 'not title',
          content: doc.data().content,
          uid: doc.data().uid,
          authorName: doc.data().uid,
          postFlag: doc.data().postFlag,
          createdAt: doc.data().createdAt.toDate(),
          updatedAt: doc.data().updatedAt ? doc.data().updatedAt.toDate() : null,
          goodCount: doc.data().goodCount ? doc.data().goodCount : null
        });
      });
    }).catch(error => {
      throw new Error(error.message);
    })
    return { ideas };
  } catch(error) {
    return { error };
  }
};

export const getUserPostedIdeas = async (uid: string) => {
  try {
    const postedIdeas: Models.PostIdea[] = [];
    await firebase
    .firestore()
    .collection('AllIdea')
    .where('uid', '==', uid)
    .where('postFlag', '==', true)
    .get()
    .then(doc => {
      if(doc.empty){
        return;
      }
      doc.forEach(snapShot => {
        postedIdeas.push({
          ideaId: snapShot.id,
          uid: snapShot.data().uid,
          authorName: snapShot.data().authorName,
          title: snapShot.data().title,
          content: snapShot.data().content,
          goodCount: snapShot.data().goodCount,
          postFlag: snapShot.data().postFlag,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    }) .catch(error => {
      throw new Error(error.message);
    })
    return { postedIdeas };
  } catch(error) {
    return { error };
  }
};

export const getUserDraftedIdeas = async (uid: string) => {
  try {
    const draftedIdeas: Models.PostIdea[] = [];
    await firebase
    .firestore()
    .collection('AllIdea')
    .where('uid', '==', uid)
    .where('postFlag', '==', false)
    .get()
    .then(doc => {
      if(doc.empty){
        return;
      }
      doc.forEach(snapShot => {
        draftedIdeas.push({
          ideaId: snapShot.id,
          uid: snapShot.data().uid,
          authorName: snapShot.data().authorName,
          title: snapShot.data().title,
          content: snapShot.data().content,
          goodCount: snapShot.data().goodCount,
          postFlag: snapShot.data().postFlag,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    }) .catch(error => {
      throw new Error(error.message);
    })
    return { draftedIdeas };
  } catch(error) {
    return { error };
  }
};


