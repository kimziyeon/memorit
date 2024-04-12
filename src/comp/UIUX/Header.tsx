"use client";
import Link from 'next/link';
import '../style/header.scss';
import Note from './Note';
import { usePathname } from 'next/navigation';

function Header() {

    // console.log(usePathname())
    const url = usePathname()

    return (
        <header>
            <h1>Memo-Rit</h1>
            <nav>
                <Link href="/" className={url=='/' ? 'active': ''}>NOTE</Link>
                <Link href="/todo" className={url=='/todo'? 'active':''}>TO DO LIST</Link>
            </nav>
        </header>
    );
}

export default Header;