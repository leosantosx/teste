import { EntityRepository, Repository } from 'typeorm'
import News from '../models/News'

interface Request {
    pageId: number
}

@EntityRepository(News)
class NewsRepository extends Repository<News> {
    public async getPage({ pageId }: Request ) {

        const [ news, total ] = await this.findAndCount({
            take: pageId
        })
        
        if(pageId > total){
            return { error: 'Limit excedid'}
        }

        return {
            news,
            count: total,
            remain: total - pageId,
        }
    }
}

export default NewsRepository