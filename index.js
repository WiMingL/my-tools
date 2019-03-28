var myTools = {
    //深度克隆
    deepClone (tar){
        var obj = {};
        var arr = [];
        var type = typeof(tar);
        if(type == 'Object'){
            if(Array.isArray(tar)){
                var len = tar.length;
                for(let i = 0; i < len; i++){
                    arr[i] = this.deepClone(tar[i])
                }
                return arr;
            }else{
                for(let key in tar){
                    obj[key] = this.deepClone(tar[key])
                }
                return obj;
            }
        }else{
            return tar;
        }
    },
    //识别函数类型
    recoType (tar){
        var type = {
            "[object Number]" : 'number',
            "[object String]" : 'string',
            "[object Boolean]" : 'boolean',
            "[object Null]" : 'null',
            "[object Undefined]" : 'undefined',
            "[object Array]" : 'array',
            "[object Object]" : 'object',
            "[object Function]" : 'function',
        }
        var name = Object.prototype.toString.call(tar);
        return type[name];
    },
    //数组去重
    numUnipue (tar){
        var obj = {};
        var newArr = [];
        var len  = tar.length;
        for(let i = 0; i < len; i++){
            obj[tar[i]] = 1;
        }
        for(var key in obj){
            newArr.push(parseInt(key));
        }
        return newArr;
    },
    //扁平化
    flatten (tar){
        var arr = [];
        var len = tar.length;
        for(var i = 0; i < len; i++){
            if(Array.isArray(tar[i])){
                arr = arr.concat(this.flatten(tar[i]));
            }else{
                arr.push(tar[i]);
            }
        }
        return arr;
    }
}
