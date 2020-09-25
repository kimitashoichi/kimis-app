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
      data.updatedAt = data.updatedAt ? data.updatedAt.toDate() : null;
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
};

// いいね機能
export const changeGoodCount = async (id: string) => {
  try {
    let currentCount = null;

    // いいね数を更新したい投稿の取得処理
    await firebase
    .firestore()
    .collection('Idea')
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
    .collection('Idea')
    .doc(id)
    .update({
      goodCount: currentCount ? currentCount + 1 : 666
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
    .collection('Idea')
    .orderBy('updatedAt', 'desc')
    .get()
    .then(snapShot => {
      if(snapShot.empty){
        return;
      }
      console.log('snapShot', snapShot)
      snapShot.forEach(doc => {
        ideas.push({
          ideaId: doc.data().ideaId ? doc.data().ideaId : 404,
          title: doc.data().title ? doc.data().title : 'not title',
          content: doc.data().content,
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
    .collection('Idea')
    .orderBy('goodCount', 'desc')
    .get()
    .then(snapShot => {
      if(snapShot.empty){
        return;
      }
      console.log('snapShot', snapShot)
      snapShot.forEach(doc => {
        ideas.push({
          ideaId: doc.data().ideaId ? doc.data().ideaId : 404,
          title: doc.data().title ? doc.data().title : 'not title',
          content: doc.data().content,
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
    .collection('Idea')
    .doc('c62EgmuKdcBZB1md3Nvz')
    .collection('postedIdea')
    .get()
    .then(doc => {
      if(doc.empty){
        return;
      }
      doc.forEach(snapShot => {
        postedIdeas.push({
          title: snapShot.data().title,
          content: snapShot.data().content,
          createdAt: new Date(),
          updatedAt: new Date(),
          goodCount: 10
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
    .collection('Idea')
    .doc('c62EgmuKdcBZB1md3Nvz') // 本当はここにUIDを入れてユーザーごとのデータを取得できるようにする
    .collection('draftedIdea')
    .get()
    .then(doc => {
      if(doc.empty){
        return;
      }
      doc.forEach(snapShot => {
        draftedIdeas.push({
          title: snapShot.data().title,
          content: snapShot.data().content,
          createdAt: new Date(),
          updatedAt: new Date(),
          goodCount: 10
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


