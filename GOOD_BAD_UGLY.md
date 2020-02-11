# The good

* writing components is no-pain experience:
	- no need to import anything (@Component)
	- no selector
	- no NgModule 
	- everything is in one file (no "styleguide" police)

# The bad

* missing TypeScript / good IDE experience :-/
* missing DI, without it I'm having hard time to structure an app :-/


# The ugly

* change detection makes me nervous - I trully don't know what I'm doing... 
* dispatching component events through the DOM? WHY?
* public contract not clear (like, at all!)
	export let categoryId; vs. export const categoryId; (const suggested by IDE!)
* the fact that component don't have a name... makes me name it twice... ?
	  import GitHubIssuesList from "./GitHubIssuesList.svelte";



# QUESTIONS
- clicks on links prevent default - is this a thing? 	