function MyClassFactory() {
    let i = 0;
    let geti = function() {
        return i;
    };
    let seti = function(num) {
        i = num;
    }
    return {
        showI() {
            return geti();
        },
        setValue(num) {
            seti(num);
        }
    }
}

let myClass = MyClassFactory();
console.log(myClass.showI());
myClass.setValue(1324);
console.log(myClass.showI());
console.log(myClass);