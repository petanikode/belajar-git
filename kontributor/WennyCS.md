Configurasi Git dan Github

Configurasi Git di terminal
- ketik git config --global user.name "XYZ"
- ketik git config --global user.email "XYZ@gmail.com"

Configurasi git dan akun github di terminal
1. ketik ssh-keygen, enter sampai muncul lokasi identification dan randomart image
2. buka lokasi identification di explorer komputer (mis: C:\Users\Ngaco/.ssh/id_rsa.pub) dan buka id_rsa.pub (yang ada logo di depan file)
3. salin isi dari id_rsa.pub dan buka akun Github>Settings>SSH and GPG keys>New SSH key kemudian tempel di kotak Key

Configurasi repositori Github di terminal
1. buat folder di lokal
2. buat beberapa file yang nantinya akan disimpan di Github
3. ketik git init
4. ketik git add nama_file.extensi
5. ketik git commit -m "keterangan commit: commit pertama"
6. ketik git branch -M <nama_git_branch_biasanya_main>
7. ketik git remote add <nama_git_repositori_biasanya_origin> <alamat SSH>
8. ketik git push -u <nama_git_repositori> <nama_git_branch>