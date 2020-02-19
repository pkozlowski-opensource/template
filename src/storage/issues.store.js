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
    }),
    remove: (existingIssue) => update((issues) => {
      // TODO(pk): how to remove the item from the DB, here? In other words, how
      // to make this method async?
      const idxOfTheExistingIssue = issues.indexOf(existingIssue);
      issues.splice(idxOfTheExistingIssue, 1);
      return issues;
    })
  };

  return store;
}

export const issuesStore = createIssuesStore();