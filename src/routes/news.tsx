import React from 'react'
import fetchRequest from '../utils/fetch'
import config from '../config'
import { useLoaderData } from 'react-router-dom';
import CardComponent from '../components/cardComponent';
import { Card } from '../interfaces/Card';

const News: React.FC = () => {
    const loadedNews = useLoaderData() as Card[];

    return (

        <>
            <div className='row justify-content-center'>
                <div className='col-6'>
                {(loadedNews && loadedNews.length > 0)
                    ? loadedNews.map((article) => {
                        //console.log(article)
                        return (<CardComponent CardData={article} />)
                    })
                    : <></>}
                </div>
                
            </div>

        </>)
}

export const loadNews = async () => {
    const newsData = await fetchRequest('GET', new URL(`${config.API_NEWS}/articles/`))

    return newsData;
}

export default News;