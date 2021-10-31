// @ts-check

/**
 * @typedef {Object} Filters
 * @property {String[]} [tags]
 * @property {String} [brand]
 * @property {String} [category]
 * @property {Object} [rating]
 * @property {Number} [rating.greater]
 * @property {Number} [rating.less]
 * @property {Object} [price]
 * @property {Number} [price.from]
 * @property {Number} [price.to]
 */

/**
 * @param {Object} filters
 * @param {String[]} [filters.tags]
 * @param {String} [filters.brand]
 * @param {String} [filters.category]
 * @param {Object} [filters.rating]
 * @param {Number} [filters.rating.greater]
 * @param {Number} [filters.rating.less]
 * @param {Object} [filters.price]
 * @param {Number} [filters.price.from]
 * @param {Number} [filters.price.to]
 */

class Api {
    constructor(baseURL = '') {
        this.url = baseURL;
        this.queryString = baseURL;
    }
    /**@param {Filters} filters*/
    combineQueryString({
        tags = [],
        brand = '',
        category = '',
        rating: { greater = 0, less = 0 } = {},
        price: { from = 0, to = 0 } = {},
    }) {
        const tagsQuery =
            tags.length > 1
                ? '&product_tags=' + tags.join(',')
                : tags.length === 1
                ? '&product_tags=' + tags[0]
                : '';
        const brandQuery =
            brand && brand !== 'Select brand' ? '&brand=' + brand : '';
        const categoryQuery = category ? '&category=' + category : '';
        const priceBiggerThen = from ? '&price_greater_than=' + from : '';
        const priceLessThen = to > from ? '&price_less_than=' + to : '';
        const ratingGreaterThen =
            greater > less ? '&rating_greater_than=' + greater : '';
        const ratingLessThen = less ? '&rating_less_than=' + less : '';
        const resultQuqeryString =
            this.url +
            '?' +
            tagsQuery +
            brandQuery +
            categoryQuery +
            priceBiggerThen +
            priceLessThen +
            ratingGreaterThen +
            ratingLessThen;
        this.queryString = resultQuqeryString.replace('?&', '?');
    }

    getInitialProducts() {
        const filters = { rating: { greater: 4.99 } };
        this.combineQueryString(filters);
        console.log(this.queryString);
        return fetch(this.queryString, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    getProductsByFilter(/**@type {Filters}*/ filters = {}) {
        this.combineQueryString(filters);
        console.log('queeeery', this.queryString);
        if (this.queryString.slice(-1) === '?') {
            return this.getInitialProducts();
        }
        return fetch(this.queryString, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

export const makeupApi = new Api(
    'http://makeup-api.herokuapp.com/api/v1/product.json'
);
