
class Article {
    constructor(
        public title: string,
        public content: string,
        public date: any,
        public image?: string
    ) {
        this.title = title;
        this.content = content;
        this.date = null;
        this.image = image;
    }
}

export default Article;