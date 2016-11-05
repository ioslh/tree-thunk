function Thunk(fn) {
  return function(){
    var args = [].slice.call(arguments);
    return function(){
      var v = [].slice.call(arguments);
      args = args.concat(v);
      return fn.apply(null,args);
    }
  }
}


function TreeThunk (fn, len) {
  if (len < 2) {
    return fn;
  }
  if (len > 2){
    return TreeThunk(Thunk(fn), len-1);
  }else{
    return Thunk(fn);
  }
}

module.exports = TreeThunk;
