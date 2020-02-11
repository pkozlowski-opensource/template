import {writable} from 'svelte/store';

import {list} from './mongo-lab';

function createIssuesStore() {
  const {subscribe, set, update} = writable([]);

  list('issues').then((issues) => set(issues));

  const store = {
    subscribe,
    add: (newIssue) => update((issues) => {
      issues.push(newIssue);
      return issues;
    })
  };

  return store;
}

export const issuesStore = createIssuesStore();