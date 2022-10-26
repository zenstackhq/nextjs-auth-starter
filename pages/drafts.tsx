import { usePost } from '@zenstackhq/runtime/hooks';
import { useSession } from 'next-auth/react';
import React from 'react';
import Layout from '../components/Layout';
import Post, { PostProps } from '../components/Post';

const Drafts: React.FC = () => {
    const { data: session, status } = useSession();
    const { find } = usePost();
    const { data: posts } = find({
        include: { author: true },
        where: { published: false },
    });

    if (status === 'loading') {
        return <p>Loading ...</p>;
    }

    return (
        <Layout>
            <div className="page">
                {session?.user ? <h1>Drafts</h1> : <h1>Please signin first</h1>}
                <main>
                    {posts?.map((post) => (
                        <div key={post.id} className="post">
                            <Post post={post} />
                        </div>
                    ))}
                </main>
            </div>
            <style jsx>{`
                .post {
                    background: white;
                    transition: box-shadow 0.1s ease-in;
                    cursor: pointer;
                }

                .post:hover {
                    box-shadow: 1px 1px 3px #aaa;
                }

                .post + .post {
                    margin-top: 2rem;
                }
            `}</style>
        </Layout>
    );
};

export default Drafts;
