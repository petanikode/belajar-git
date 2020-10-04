import requests,wget,bs4,os,sys
url = "https://wallpaperaccess.com"
cook = {"cookie":"PHPSESSID=1b1ee73ddd17e8d3db8614056e495efa"}
ua = {"User-Agent":"Mozilla/5.0 (Linux; Android 9; Redmi 6A Build/PPR1.180610.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/80.0.3987.99 Mobile Safari/537.36"}
linkimg = []
def imgdown(linkimgs,linka):
 jml = input("> Jumlah gambar (max :"+str(len(linkimgs))+") : ")
 if jml > 0 & jml <= len(linkimgs):
  if not os.path.isdir("/sdcard/AnimeImageDownloader/"+linka):
   os.mkdir("/sdcard/AnimeImageDownloader/"+linka);
  for i in range(jml):
   wget.download(url+linkimgs[i],"/sdcard/AnimeImageDownloader/"+linka+"/"+str(i)+".jpg",bar=bar)
  print "\nDone"
 else:
   print "Failed!"
   imgdown(linkimg)
def getimg(links):
 urls = url+links
 print "!Loading..."
 r = requests.get(urls,headers=ua,cookies=cook)
 bb = bs4.BeautifulSoup(r.text,"html.parser")
 for x in bb.find_all("a",href=True):
  if "/download" in x["href"]:
   if x["href"] not in linkimg:
    linkimg.append(x["href"])
 imgdown(linkimg,links.replace("/",""))
def getgambar(html):
 bb = bs4.BeautifulSoup(html,"html.parser")
 title = []
 link = []
 jumlah = []
 for x in bb.find_all("a",{"class":"ui fluid image"}):
  title.append(x["title"])
  link.append(x["href"])
  jumlah.append(x.find("span",{"class":"color_gray"}).text.replace("\t","").replace(" ","").replace("\n",""))
 print "\n"+str(len(title))+" Pencarian ditemukan"+"\n"
 for i in range(len(title)):
  print str(i+1)+". "+title[i]+" |"+jumlah[i]+" gambar"
 pil = input("> Pilih no : ")
 getimg(link[pil-1])
def main():
 print """
--------------------------
| Anime Image Downloader |
--------------------------
 """
 if not os.path.isdir("/sdcard/AnimeImageDownloader/"):
  os.mkdir("/sdcard/AnimeImageDownloader/")
 name = raw_input("> Search : ")
 r = requests.get(url+"/search?q="+name,headers=ua,cookies=cook)
 if "Sorry, no wallpapers found" in r.text:
  print "\nPencarian tidak ditemukan\n"
  main()
 else:
  getgambar(r.text)
def bar(current, total, width=80):
  progress_message = "Downloading: %d%% [%d / %d] bytes" % (current / total * 100, current, total)
  sys.stdout.write("\r" + progress_message)
  sys.stdout.flush()
main()
