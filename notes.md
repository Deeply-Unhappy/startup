# CS 260 Notes

Sections are left without suitable content until pertinent course information is encountered to justify recording

## Github Repository assignment

This was fairly straightforward, mostly allowing me to familiarize myself with a new IDE, and the Git bash terminal. 


## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

Starightforward, website made things easy to interact with. Will need to make note to self in financial planners to keep track of the resource.
### Domain Registry
Cannot register domain on a free account per AWS policy, will need to keep careful track of financial demand for the project from here on.
### Useful Info
- Key can have unfixable improper permissions if in the windows directory, must move it to the linux home directory and use ~/.ssh to get access
- Cloned repositories can have files undetectable by wsl; run "sed -i 's/\r$//' file" to fix 

## Caddy

Needed a registered domain name to finish the Caddyfile edit the same way it was shown in course instruction. Could not find resources through personal research that would let me set up a secure connection using only an elastic IPv4.

## HTML

Mostly review from 111, have physical notes on this. No spots to submit the link of the codepen in Canvas, so assumption was made that it was not necessary to reproduce exactly the result the instructions were outlining. The following links demonstrate ability to execute the instructions but do not match expected output.
- [Codepen Exercise - Structure](https://codepen.io/Deeply-Unhappy/pen/MYKWPPJ)
- [Codepen Exercise - Media](https://codepen.io/Deeply-Unhappy/pen/KwVKrNq)
- [Codepen Exercise - Input](https://codepen.io/Deeply-Unhappy/pen/VYewVzo)

## CSS

Straightforward system, need to remember to distinguish between 1 and l when reading documentation. Will need to do research personally as to what are best practices for ordering sections of code in CSS.
- [Codepen Exercise](https://codepen.io/Deeply-Unhappy/pen/WbrNYbG)
Still unable to determine whether space or tab method is preferred for CSS formatting, opted for consistent tab usage, will need to look up.

## React Part 1: Routing

### Implementation Plans
- Components: Understandable, but will likely take the bulk of development time for this deliverable.
- Router: Codepen exercise for this section was possibly better at teaching information presented in "components" [Codepen Exercise - Router](https://codepen.io/Deeply-Unhappy/pen/qEbqOyO)
- Vite: Helpful in seeing how it all connects, CSS still for styling whole elements/classes, while react works well for manipulating details more flexibly than html alone.
[Site Image](vite-exercise.png)
### Site Building with Vite
I decided to make a new folder to hold the deliverable files and act as a framework while working on the bundling. Static assets were moved to the correct directory, and a favicon was set for the site. Bundling was surprisingly easy, but for sake of navigational clarity, I've opted to change the site layout some, implementing a nav bar to hold what used to be sidebar elements, on principle that it seemed to provide more visual clarity than interaction via sidebar.

## React Part 2: Reactivity

No content
