const admin = require('firebase-admin');
const data = require('./data.json'); // your JSON file

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function importData() {
  const batch = db.batch();
  const collectionRef = db.collection('Jobs');

  data.forEach((item) => {
    const customId = String(item.id);
    const docRef = collectionRef.doc(customId); // auto-generated ID
    batch.set(docRef, item);
  });

  await batch.commit();
  console.log('✅ All documents imported successfully!');
}

importData().catch(console.error);
