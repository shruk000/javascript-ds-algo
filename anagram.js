const checkAnagram=(str1,str2)=>{
    const getCharMap=(str)=>{
        const charMap={};
        for(let char of str){
            charMap[char]=(charMap[char]||0) + 1;
        }
        return charMap;
    }

    const charMap1=getCharMap(str1);
    const charMap2=getCharMap(str2);

    for(const [key,value] of Object.entries(charMap1)){
        if(charMap2[key]!=value)return false;
    }
    return true;
}

console.log("check ana - aabber bebara = ",checkAnagram("aabber","bebara") );
console.log("check ana - aabber bebara = ",checkAnagram("abber","bebara") );
