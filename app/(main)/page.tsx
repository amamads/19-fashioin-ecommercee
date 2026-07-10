'use client'
import Image from "next/image";
import b1 from '@/public/banner 1.png'


export default function HomePage() {
	console.log(b1,'aaaaaaaaaaaaaaaaaaaaaaa');
  return (
    <div>
      - hero - Product categoreis - Discounted product - promo banner - comments
      {/* <Button onClick={singInGoogle}>google</Button> */}
	  <Image 
	  src='https://m0fcr61pbt.ufs.sh/f/W80dIrnUS5cJoyEgGwlX2WrIiaB6c5PgbuOvYDAy0kExwtod'
	  alt="dress"
	  width={200}
	  height={100}
	  />
	  <Image 
	  src='/banner 1.png'
	  alt="dress"
	  width={200}
	  height={100}
	  />
    </div>
  );
}
