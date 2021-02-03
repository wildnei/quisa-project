## Git Branching Cheet Sheat
​
1. Create a new branch ( `git checkout -b <feature-name>` )
    - Each branch should be a "feature branch", i.e. should represent a feature or bug you are working on. (use Github Issues to help with this!)
    - Try to avoid "user branches", aka "matt-branch", "jack-branch", "innana-branch", "chris-branch", etc. This approach makes it more difficult to keep track of what each member is working on. 
​
2. Write code, add, commit ( `git add -A` , `git commit -m "commit message"` )
​
3. When ready to push your branch to GitHub, PULL your main branch into your current working branch BEFORE YOU PUSH ANYTHING! ( `git pull origin main` ) 
    - fix any merge conflicts that come up
    - if you had to fix any conflicts in your files, make sure to do another add and commit (  `git add -A` , `git commit -m "commit message"`  )
​
4.  Push your changes to GitHub ( `git push` )
​
5. Navigate to your repository on github.com/your-repo-name and create a pull request ( see post-class office hours demo 1/26/2021 )
​
6. Have a project member review and merge your pull request on GitHub
​
7. Once your code has been merged, go back to your main branch and update your local copy with the newly-merged code:
    - `git checkout main`
    - `git pull`
​
8. Create a new branch, and start from step 1!
