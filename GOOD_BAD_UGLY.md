# The good

* writing components is no-pain experience:
	- no need to import anything (@Component)
	- no selector
	- no NgModule 
	- everything is in one file (no "styleguide" police)

* forms are super-simple and actually work - the best thing I’ve seen from the ngModel times in AngularJS
	- no confusion between template driven vs. model driven forms
	- what is provided is a binding - simple but lacking 


# The bad

* missing TypeScript / good IDE experience :-/
	* no auto-importing, actual auto-completion for imports seldom works
	* unused imports are not detected
* missing DI, without it I'm having hard time to structure an app :-/


# The ugly

* missing basic infrastructure
	- proper forms infrastructure (validation etc.)
	- router
* change detection makes me nervous - I truly don't know what I'm doing... 
* dispatching component events through the DOM? WHY?
* public contract not clear (like, at all!)
	export let categoryId; vs. export const categoryId; (const suggested by IDE!)
* the fact that component don't have a name... makes me name it twice... ?
	  import GitHubIssuesList from "./GitHubIssuesList.svelte";



# QUESTIONS
- clicks on links prevent default - is this a thing? 	