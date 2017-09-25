import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'uploadDocName'
})

export class UploadDocNamePipe implements PipeTransform{
    transform(value:string,args:string[]):any{
        if(!value) return value;  
        if(value.indexOf('\\')==-1)        return value;
        if(!value.split('\\')[1].split('_')) return value;
        let modVal="";
        value.split('\\')[1].split('_').forEach(function(val,index){
            if(index>0){
               if(index>1)
                    modVal=modVal+"_"+val;
                else
                    modVal=val;
            }
        })
        console.log(modVal);
        return modVal;
    }
}