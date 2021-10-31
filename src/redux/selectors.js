export const searchSelectors = {
    query: state => state.search.searchQuery,
};

export const counterSelectors = {
    counter: state => state.counter.counter,
    counterPayload: state => state.counter.counterPayload,
    text: state => state.counter.text,
    isCounter: state => state.counter.isCounter,
};

export const makeupSelectors = {
    tags: state => state.makeup.tags,
    brands: state => state.makeup.brands,
    products: state => state.makeup.products,
};
