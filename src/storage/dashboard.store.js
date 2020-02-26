import {derived} from 'svelte/store';

import {categoriesStore} from './categories.store';
import {issuesStore} from './issues.store';


function getNoOfIssuesForCategory(issues, catId) {
  return issues.filter(issue => issue.catId === catId).length;
}


export const dashboardStore = derived(
    [categoriesStore, issuesStore], ([$categoriesStore, $issuesStore], set) => {
      if ($categoriesStore.length > 0 && $issuesStore.length > 0) {
        const categoriesWithNoOfIssues = $categoriesStore.map(category => {
          category.noOfIssues =
              getNoOfIssuesForCategory($issuesStore, category._id);
          return category;
        });

        set(categoriesWithNoOfIssues);
      }
    });