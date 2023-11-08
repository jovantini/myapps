import state from './redux/state';
import { addPost } from './redux/state.js';
import { rerenderEntireTree } from './render';
import { updateNewPostText } from './redux/state'; 



rerenderEntireTree(state, addPost, updateNewPostText);


