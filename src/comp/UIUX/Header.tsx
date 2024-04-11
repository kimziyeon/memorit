"use client";
import Link from 'next/link';
import '../style/header.scss';
import Note from './Note';

function Header() {

    return (
        <header>
            <h1>Memo-Rit</h1>
            <nav>
                <Link href="/">NOTE</Link>
                <Link href="/todo">TO DO LIST</Link>
            </nav>
        </header>
    );
}

export default Header;