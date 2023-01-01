# NextJS

Template for NextJS websites.

## Usage

To use this template, first install cookiecutter with `pip` if you haven't already.

```bash
pip3 install cookiecutter
```

Next, go to the directory under which you would like to create your new project. Use the command below.

```bash
cookiecutter git@github.com:sophielizg/template-nextjs.git
```

You will then be prompted to enter a project name and description. The project name should match the name of the new folder and repository you want to create. The description should be brief and will be displayed in the README, package.json, and a couple of site pages (just copying the description of the repo would probably be good here).

```bash
project_name [ToDoApp]: my_new_app
project_description [An app that tracks your TODOs]: This is a thing my app does
```

`cd` into the new project repo that you created. Initialize it as a git repo and add your remote repository. Ideally this should be a gitlab remote repository to take advantage of CI/CD.

```bash
git init
git remote add origin git@gitlab.com:username/my_new_app.git

# Push an initial commit
git add .
git commit -m "Initial commit"
git push -u origin master
```

Once you push your first commit wait for the pipeline to succeed. Once the pipeline succeeds, you're all set!
