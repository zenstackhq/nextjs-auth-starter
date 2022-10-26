import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header: React.FC = () => {
    const router = useRouter();
    const isActive: (pathname: string) => boolean = (pathname) =>
        router.pathname === pathname;

    const { data: session, status } = useSession();

    return (
        <nav>
            <div className="left">
                <Link href="/">
                    <a className="bold" data-active={isActive('/')}>
                        Blog
                    </a>
                </Link>
                <Link href="/drafts">
                    <a data-active={isActive('/drafts')}>Drafts</a>
                </Link>
            </div>
            <div className="right">
                {status === 'authenticated' && (
                    <a onClick={() => signOut()}>Signout</a>
                )}
                {status === 'unauthenticated' && (
                    <a onClick={() => signIn()}>Signin</a>
                )}
                <Link href="/create">
                    <a data-active={isActive('/create')}>+ Create draft</a>
                </Link>
            </div>
            <style jsx>{`
                nav {
                    display: flex;
                    padding: 2rem;
                    align-items: center;
                }

                .bold {
                    font-weight: bold;
                }

                a {
                    text-decoration: none;
                    color: #000;
                    display: inline-block;
                    cursor: pointer;
                }

                .left a[data-active='true'] {
                    color: gray;
                }

                a + a {
                    margin-left: 1rem;
                }

                .right {
                    margin-left: auto;
                }

                .right a {
                    border: 1px solid black;
                    padding: 0.5rem 1rem;
                    border-radius: 3px;
                }
            `}</style>
        </nav>
    );
};

export default Header;