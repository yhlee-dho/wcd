import React from "react";
import Head from "next/head";
import { Category, Post } from "../shared/types";
import { Feed } from "../components";
import { fetchCategories, fetchPosts } from "../api";

interface FrontProps {
	categories: Category[];
	posts: Post[];
}

export const getStaticProps = async () => {
	const categories = await fetchCategories();
	const posts = await fetchPosts();
	return { props: { posts, categories } }
};

export default function Front ({ categories, posts }: FrontProps) {
	return (
		<>
			<Head>
				<title>Website Landing Page</title>
			</Head>

			<main>
                <Feed posts={posts} categories={categories} />
            </main>
		</>
	);
};
