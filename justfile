[windows]
set shell := ["cmd.exe", "/c"]

# Copy style.less and parser.js to MPE's config dir
[linux]
deploy:
    @cp theme/style.less ~/.config/crossnote/style.less
    @cp tweaks/parser.js ~/.config/crossnote/parser.js
    @echo "Deployed style.less, parser.js to ~/.config/crossnote/"

[windows]
deploy:
    @copy /Y theme\style.less "%USERPROFILE%\.crossnote\style.less" >nul
    @copy /Y tweaks\parser.js "%USERPROFILE%\.crossnote\parser.js" >nul
    @echo "Deployed style.less, parser.js to %USERPROFILE%\.crossnote\"

# Re-deploy when theme files change
watch:
    watchexec -w theme -w tweaks -e less,js -- just deploy
