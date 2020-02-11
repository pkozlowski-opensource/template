import {readable} from 'svelte/store';
import {list} from './mongo-lab';

export const categoriesStore = readable([], set => {
  list('categories').then((categories) => set(categories));
});