import {readable} from 'svelte/store';
import {listIssues} from './github';

export const ghIssuesStore = readable([], set => {
  listIssues().then(
      ghIssues => set(ghIssues.filter(issueOrPr => !issueOrPr.pull_request)));
});