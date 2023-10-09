// firestore
import {
  collection,
  addDoc,
  getDoc,
  // querySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '@/libs/firebase';
import { ReactNode } from 'react';


type Props = {
  children: ReactNode
}



export const handleSubmit2 = async (name: string, value: any, email: string) => {
  // formData にはフォームデータが渡される
  if (value !== null && name !== '' && email !== '') {
    await addDoc(collection(db, 'contact'), {
      name: name.trim(), // 空白文字を削除
      price: email.trim(),
    });
    // データをクリア
    value = null;
    name = "";
    email = "";
  }
}

export const SendDB = ({ children }: Props) => {

  const handleSubmit = async (formData: any) => {
    // formData にはフォームデータが渡される
    if (formData.value !== null && formData.name !== '' && formData.email !== '') {
      await addDoc(collection(db, 'contact'), {
        name: formData.name.trim(), // 空白文字を削除
        price: formData.email.trim(),
      });
      // データをクリア
      formData.value = null;
      formData.name = "";
      formData.email = "";
    }
  }
  return (
    <form action="">
      {children}
    </form>
  )
}
