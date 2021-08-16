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
Kalo dilihat di git status akan seperti :
```
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	git-doc-by-farid.md
```
* Staged : Sudah di lakukan penandaan tapi belum di commit. caranya dengan perintah git add <nama_file> contoh:
  ```
  git add git-doc-by-farid.md
  git add abc.html tes.php
  git *.html
  git .
  ```
Kalo dilihat di git status akan seperti :
  ```
  Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	new file:   git-doc-by-farid.md
  ```

  * Commited : sudah dilakukan perintah "git commit" contoh:
  ```
  git commit -m "tambah file git-doc-by-farid.md"
  ```

Kalo dilihat di git status akan seperti :
  ```
  On branch master
  Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
  ```

### Sekarang kita revisi file git-doc-by-farid.md
kalo kita lihat dengan git status :
```
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   git-doc-by-farid.md

no changes added to commit (use "git add" and/or "git commit -a")
```
Sekarang coba pindahkan ke status stagged :
``` 
  git add git-doc-by-farid.md
```
hasilnya :   
```
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   git-doc-by-farid.md
```
Pindahkan ke status commited :
```
  git commit -m "edit file git-doc-by-farid.md"
```
hasilnya :   
```
On branch master
Your branch is ahead of 'origin/master' by 2 commits.
  (use "git push" to publish your local commits)
```
### Cara melihat log revisi
```
git log
```
hasilnya : 
```
commit d132501c719d095047350cf2bd0d4893676d0677 (HEAD -> master)
Author: Mohamad Farid Saleh <opencartplugin@gmail.com>
Date:   Mon Aug 16 08:17:39 2021 +0000

    edit file git-doc-by-farid.md

commit 4f864a676b9613de1295927a3867a08480e102e6
Author: Mohamad Farid Saleh <opencartplugin@gmail.com>
Date:   Mon Aug 16 08:08:56 2021 +0000

    tambah file git-doc-by-farid.md
```
Agar log lebih pendek :
```
git log --oneline
```
hasilnya : 
```
d132501 (HEAD -> master) edit file git-doc-by-farid.md
4f864a6 tambah file git-doc-by-farid.md
```

Untuk melihat detail sebuah log :
```
git log 4f864a676b9613de1295927a3867a08480e102e6
```
hasilnya : 
```
commit 4f864a676b9613de1295927a3867a08480e102e6
Author: Mohamad Farid Saleh <opencartplugin@gmail.com>
Date:   Mon Aug 16 08:08:56 2021 +0000

    tambah file git-doc-by-farid.md

commit cc1d22e4a110d6b0e3eb5ae81a5823318c9f5a12 (origin/master, origin/HEAD)
Author: Mohamad Farid Saleh <github.farid1@gmail.com>
Date:   Mon Aug 16 14:47:21 2021 +0900

    saya sisipkan kode di index.php

commit ffdcbf902bdaf0ec54f30941053536c543b6d4de (upstream/master)
Merge: e0b0c6d d83b2cb
Author: Ahmad Muhardian <dian@petanikode.com>
Date:   Sun Aug 1 12:12:32 2021 +0800

    Merge pull request #257 from agustig/master
    
    Kontribusi agustig dalam belajar git
dst ......
```


note : *yang ditampikan adalah log dari commit tersebut dan commit setelahnya.*

Untuk melihat log dari sebuah file :
```
git log git-doc-by-farid.md
```
hasilnya :
```
commit d132501c719d095047350cf2bd0d4893676d0677 (HEAD -> master)
Author: Mohamad Farid Saleh <opencartplugin@gmail.com>
Date:   Mon Aug 16 08:17:39 2021 +0000

    edit file git-doc-by-farid.md

commit 4f864a676b9613de1295927a3867a08480e102e6
Author: Mohamad Farid Saleh <opencartplugin@gmail.com>
Date:   Mon Aug 16 08:08:56 2021 +0000

    tambah file git-doc-by-farid.md
```

melihat log oleh author tertentu :
```
git log --author='Mohamad Farid Saleh'
atau pakai email :
git log --author='opencartplugin@gmail.com'
```

### Cara melihat perbandingan revisi
Membandingkan 


