/* eslint-disable react/no-children-prop */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import { usePost } from '@zenstackhq/runtime/hooks';

const Post: React.FC = () => {
    const { get, update, del } = usePost();
    const router = useRouter();

    const { data: post, error } = get(router.query.id as string, {
        include: { author: true },
    });

    if (error) {
        return <p>Failed to load post: {error.message}</p>;
    }

    if (!post) {
        return <p>Loading ...</p>;
    }

    const publish = async (id: string) => {
        await update(id, { data: { published: true } });
        router.push('/');
    };

    const unpublish = async (id: string) => {
        await update(id, { data: { published: false } });
        router.push('/drafts');
    };

    const destroy = async (id: string) => {
        await del(id);
        router.push('/');
    };

    return (
        <Layout>
            <div>
                <h2>{post.title}</h2>
                <p>
                    By{' '}
                    {post.author?.name ||
                        post.author?.email ||
                        'Unknown author'}
                </p>
                <ReactMarkdown children={post.content} />
                {post.published ? (
                    <button onClick={() => unpublish(post.id)}>
                        Unpublish
                    </button>
                ) : (
                    <button onClick={() => publish(post.id)}>Publish</button>
                )}
                <button onClick={() => destroy(post.id)}>Delete</button>
            </div>
            <style jsx>{`
                .page {
                    background: white;
                    padding: 2rem;
                }

                .actions {
                    margin-top: 2rem;
                }

                button {
                    background: #ececec;
                    border: 0;
                    border-radius: 0.125rem;
                    padding: 1rem 2rem;
                }

                button + button {
                    margin-left: 1rem;
                }
            `}</style>
        </Layout>
    );
};

export default Post;
