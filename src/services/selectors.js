export const searchSelectors = {
    query: state => state.search.searchQuery,
};

export const counterSelectors = {
    counter: state => state.counter.counter,
    counterPayload: state => state.counter.counterPayload,
    text: state => state.counter.text,
    isCounter: state => state.counter.isCounter,
};
