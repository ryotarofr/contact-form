"use client"

import dayjs, { Dayjs } from 'dayjs';
import ja from 'date-fns/locale/ja'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useEffect, useState } from 'react';
import { jaJP } from '@mui/x-date-pickers/locales';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Fab from '@mui/material/Fab';
import Link from 'next/link';

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
import { handleSubmit2 } from './SendDB';



export function ContactForm() {
  const [value, setValue] = useState<Dayjs | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   if (value !== null && name !== '' && email !== '') {
  //     await addDoc(collection(db, 'contact'), {
  //       name: name.trim(), // 空白文字を削除
  //       price: email.trim(),
  //     });
  //     // データをクリア
  //     setValue(null)
  //     setName("")
  //     setEmail("")
  //   }
  // }

  const submit = handleSubmit2(name, value, email)

  return (
    <>
      <div className="flex justify-center items-center h-screen
    ">
        <div className=''>
          <Link href="https://fr-next.dev/about" >
            <Fab className='block mx-auto' variant="extended" aria-label="back">
              <ArrowBackIosIcon />
              戻る
            </Fab>
          </Link >
          <div className='text-2xl text-center py-10'>お問い合わせ</div>
          <form className='w-full max-w-md mx-auto'>
            <div className='mx-4'>
              <div className="flex flex-col space-y-5 my-4">
                <label className='text-xl'>
                  お名前
                  <br className='' />
                  <input
                    className='border-black/50 bg-white/30 w-full border text-skin-accent'
                    type="text"
                    // placeholder='名前を入力してください'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className='text-xl'>
                  メールアドレス
                  <br className='' />
                  <input
                    className='border-black/50 bg-white/30 w-full border text-skin-accent'
                    type="text"
                    // placeholder='メールアドレスを入力してください'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className='text-xl'>ヒアリング日程</div>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                localeText={jaJP.components.MuiLocalizationProvider.defaultProps.localeText}
              >
                <Stack spacing={2} sx={{ minWidth: 305 }}>
                  <DateTimePicker
                    value={value}
                    onChange={setValue}
                    referenceDate={dayjs('2023-10-10T15:30')}
                  />
                </Stack>
              </LocalizationProvider>
              <Button
                className='w-full text-center my-4'
                variant="outlined"
                endIcon={<SendIcon />}
              // onClick={() => submit}
              >
                送信
              </Button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}