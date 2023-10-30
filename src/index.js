import state from './redux/state';
import { addPost } from './redux/state.js';
import { rerenderEntireTree } from './render';



rerenderEntireTree(state, addPost);


