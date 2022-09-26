import axios from "axios";


export default class PostServise {
    static async getAll(limit : 10, page: 1) {  /* 3 принимаем лимит и номер страницы */
    
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {  /* 4 и передаем эти параметры в запрос */
                    _limit: limit,    
                    _page: page
                }
            })
            return response;
      
    }
}