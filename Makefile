.PHONY: gitpullmain
gitpullmain:
        git fetch --all
        git reset --hard origin/main
        git pull origin main