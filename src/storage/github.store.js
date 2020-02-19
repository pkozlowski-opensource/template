import {readable} from 'svelte/store';
import {listIssues} from './github';

export const ghIssuesStore = readable([], set => {
  // TODO(pk): filter it through a set of issues I've got already - how about
  // subscribing to issue changes and applying filter then?
  listIssues().then((ghIssues) => set(ghIssues));
});