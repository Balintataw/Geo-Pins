import { createContext } from 'react';

const Context = createContext({
    currentUser: null,
    isAuth: false,
    draft: null // for draft pin setting
});

export default Context;