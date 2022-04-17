export default class PageNotFound extends Error{
    constructor(message) {
        super(message);
        this.name = "PageNotFound";
    }
};