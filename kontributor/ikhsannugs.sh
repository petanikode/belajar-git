#!/bin/bash
read -p "Apakah kamu yakin mengnstall webserver ? (Y/n) " pilih;
if echo $pilih | grep -iq "^y"   
then
	echo "Menyiapkan instalasi web server"
	sudo apt-get update
	echo "Melakukan Instalasi Web server"
	sudo apt-get install -y nginx php7.2-fpm php7.2-mysql
	echo "Melakukan Instalasi Database Server"
	sudo apt-get install -y mysql-server
	echo "Instalasi Selesai"
	exit 0
else
	echo "Instalasi dibatalkan"
	exit 1
fi
