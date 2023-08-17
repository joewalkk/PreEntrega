
import { collection, getDocs, getDoc, doc, addDoc, where, query, updateDoc, deleteDoc, writeBatch, increment } from "firebase/firestore";
import { db } from "./config";

const pcsRef = collection(db, "items");


//ESTO VA A CAMABIAR
//Simulación de una petición de red que nunca falla
export const getPcs = async (category) => {
  const q = category
    ? query(pcsRef, where('category', '==', category))
    : pcsRef;

  let pcs = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    pcs = [...pcs, { ...doc.data(), id: doc.id }];
  });
  return pcs;
};

//LEER
export const getPC = async (id) => {
  const document = doc(db, "items", id);
  const docSnap = await getDoc(document);

  if (docSnap.exists()) return { id: docSnap.id, ...docSnap.data() };

  return null;
};

//ACTUALIZAR
export const updatePC = async (id, item) => {
  const newPc = await updateDoc(doc(db, "items", id), item);
  return;
};

//ELIMINAR
export const deletePC = async (id) => {
  return await deleteDoc(doc(db, "items", id));

};

//OPERACION EN LOTE
export const updateManyPCs = async (items) => {
  const batch = writeBatch(db);

  items.forEach(({ id, qty }) => {
    batch.update(doc(db, "items", id),{
      stock: increment(-qty)
    })


  })

  batch.commit();
}
