import { firestore } from './firebase';

export function getBookOverviews(callback) {
  return firestore.collection('bookoverviews').onSnapshot(callback);
}

export function getBookOverviewBySlug(id) {
  return firestore.collection('bookoverviews').doc(id).get();
}
