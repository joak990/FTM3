const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");
const { throws } = require("assert");
const { request } = require("../utils/request");

function pwd(print) {
   TransformStream(process.cwd())
}

function date(print) {
    print(new Date().toString())
}

function echo(print,args) {
print(args)
}

function ls(print) {
    const fs = require('fs');
    fs.readdir(".",(error,files)=>{
     if(error) {
     throw error
    }  
    print(files.join(' '))
     
})
}

function cat(print,args) {
    fs.readFile(args, 'utf-8',(error,data)=>{
        if(error){
            throw error
        }
    print(data)
    } 
    )
}

function head(print,args) {
    fs.readFile(args,'utf-8',(error,data)=>{
        if(error){
            throw error
        }
        const datita = data.split('\n')[0]
    print(datita)
    }

    )
}

function tail(print,args) {
    fs.readFile (args,'utf-8',(error,data)=>{
        if(error){
            throw error
        } 
      const datin1 = data.split('\n')
      const datinfinish=[datin1.length -1]  
        print(datinfinish)
    }

    )
}

function curl(print,args) {
    request(args,(error,response)=>{
        if(error){
            throw error
        }else{
            print(response)
        }
  })
}

module.exports = {pwd,date,echo,ls,cat,head,tail,curl};
