import './index.scss'
import Link from "next/link";

export default function Buttons({ name, link, target}) {
  return (
    <>
      {link ? (
        <Link href={`${link}`} target={target}>
          <button className='buttons'>{name}</button>
        </Link>
      ):(
        <button className='buttons__disabled'>{name}</button>
      )}
    </>
  )
}

// <Buttons name="" link="" target="" />