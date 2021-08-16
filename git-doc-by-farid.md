### Melihat config git kita:
```
git config --list
```
tampilan kurang lebih sbb:
```
user.email=opencartplugin@gmail.com
user.name=Mohamad Farid Saleh
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
remote.origin.url=git@github.com:githubfarid1/belajar-git.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
branch.master.remote=origin
branch.master.merge=refs/heads/master
remote.upstream.url=https://github.com/petanikode/belajar-git.git
remote.upstream.fetch=+refs/heads/*:refs/remotes/upstream/*
```
### Kondisi file git ada 3 :
* Modified : bisa berupa file baru atau file yang di edit tapi belum dilakukan dengan perintah "git add"
* Stagged : Sudah di lakukan penandaan tapi belum di commit. caranya dengan perintah git add <nama_file> contoh:
  ```
  git add git-doc-by-farid.md
  git add abc.html tes.php
  git *.html
  git .
  ```
  * Committed

