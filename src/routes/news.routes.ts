import { Router } from 'express'
import { getCustomRepository } from 'typeorm'
import CreateNewsService from '../services/CreateNewsService'
import NewsRepository from '../repository/newsRepository'

const newsRoutes = Router()

newsRoutes.get('/:id', async (request, response) => {
    const id = parseInt(request.params.id)

    const newsRepository = getCustomRepository(NewsRepository)
    const pageNews = await newsRepository.getPage({ pageId: id })

    response.json(pageNews)
})

newsRoutes.post('/', async (request, response) => {
    const { title, content } = request.body
    const createNews = new CreateNewsService()

    const news = await createNews.execute({ 
        title,
        content,
     })

     return response.json(news)
})

export default newsRoutes