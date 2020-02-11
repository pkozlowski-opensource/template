export function listIssues() {
  return fetch(
             'https://api.github.com/repos/angular/angular/issues?labels=comp%3A+core&per_page=100')
      .then(r => r.json());
}