/* eslint-disable react/no-children-prop */
import React from 'react';
import Router from 'next/router';
import ReactMarkdown from 'react-markdown';
import { Post, User } from '@zenstackhq/runtime/types';

export type PostProps = Post & { author: User | null };

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
    const authorName = post.author
        ? post.author.name || post.author.email
        : 'Unknown author';
    return (
        <div onClick={() => Router.push('/p/[id]', `/p/${post.id}`)}>
            <h2>{post.title}</h2>
            <small>By {authorName}</small>
            <ReactMarkdown children={post.content} />
            <style jsx>{`
                div {
                    color: inherit;
                    padding: 2rem;
                }
            `}</style>
        </div>
    );
};

export default Post;
