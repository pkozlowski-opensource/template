import {writable} from 'svelte/store';

import {list, remove as removeFromMongoDB, save} from './mongo-lab';

function createIssuesStore() {
  const {subscribe, set, update} = writable([]);

  list('issues').then((issuesAndPrs) => {
    set(issuesAndPrs);
  });


  const store = {
    subscribe,
    add: (newIssue) => {
      save('issues', newIssue).then(_ => {update((issues) => {
                                      issues.push(newIssue);
                                      return issues;
                                    })});
    },
    remove: (existingIssue) => {
      removeFromMongoDB('issues', existingIssue._id).then(_ => {
        update(issues => {
          const idxOfTheExistingIssue = issues.indexOf(existingIssue);
          issues.splice(idxOfTheExistingIssue, 1);
          return issues;
        });
      });
    },
    updateIssue: (existingIssue) => {
      save('issues', existingIssue).then(_ => {
        update(issues => issues);
      });
    }
  };

  return store;
}

export const issuesStore = createIssuesStore();