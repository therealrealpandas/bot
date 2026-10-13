# Bot Flood

A static landing page for the Bot Flood Minecraft server.

## Local preview

Open the site locally with:

python3 -m http.server 8000

Then visit:

http://localhost:8000

## GitHub Pages deployment

This project is ready for GitHub Pages deployment using the workflow in .github/workflows/pages.yml.

Steps:
1. Push this project to a GitHub repository.
2. In GitHub, open the repository settings.
3. Go to Pages.
4. Set the source to GitHub Actions.
5. Push to the main branch and the workflow will publish the site.

The custom domain is prepared in CNAME for traffercmc.com.

Note: the domain itself must still have working DNS records pointing to GitHub Pages for the public site to load.
