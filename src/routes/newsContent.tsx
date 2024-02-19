import React from 'react';
import { Params, useLoaderData } from 'react-router-dom';
import fetchRequest from '../utils/fetch';
import config from '../config';
import { Article } from '../interfaces/Article';

const NewsContent = () => {
    const loadedArticle = useLoaderData() as Article;

    console.log(loadedArticle);

    return (
        <>
            <div className='row justify-content-center'>
                <div className='col-6'>
                <h1>{loadedArticle.title}</h1>
                </div>
                
            </div>
            <div className='row justify-content-center'>
                {/* In a production enviroment I would use a htm sanitizer */}
                 <div className='col-6' dangerouslySetInnerHTML={{ __html: loadedArticle.body_html }}>
                </div>
            </div>
        
        </>
    );
};

export const loadArticle = async ({ request, params }: { request: Request; params: Params }) => {
    const articleId = params.id;
    const articleData = await fetchRequest('GET', new URL(`${config.API_NEWS}/articles/${articleId}`));

    return articleData;
};

export default NewsContent;
