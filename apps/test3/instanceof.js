function instance_of(l, r){
    const propotype = r.prototype
    const proto = l.proto
    while(true) {
        if(proto === null){
            return false
        }
        if(prototype === proto){
            return true
        }
        proto = proto.__proto__
    }
}
instance_of(12, Object)