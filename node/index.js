//menampilkan nama kontributor di file .txt
const fs=require('fs')
const color=require('colors')

fs.readdir('../kontributor', (err, files) => {
  files.forEach(file => {
  	if(file.includes('.txt')){
  	let name=fs.readFileSync('../kontributor/'+file,'utf8').split(/\n/)[0]
  	if(name.toLowerCase().includes('nama')){
  		console.log(fs.readFileSync('../kontributor/'+file,'utf8').split(/\n/)[0])
  		console.log("==============".rainbow)
  	}
  	}
  });
});

