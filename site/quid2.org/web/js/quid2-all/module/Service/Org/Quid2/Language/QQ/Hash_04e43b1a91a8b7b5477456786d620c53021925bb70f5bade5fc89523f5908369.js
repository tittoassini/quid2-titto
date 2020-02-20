goog.provide('quid2.module.Service.Org.Quid2.Language.QQ.Hash_04e43b1a91a8b7b5477456786d620c53021925bb70f5bade5fc89523f5908369');
goog.require('quid2.std');

quid2.module.Service.Org.Quid2.Language.QQ.Hash_04e43b1a91a8b7b5477456786d620c53021925bb70f5bade5fc89523f5908369 = (function () {
var s = quid2.std;
/*
data Type a where 
  TyDecl :: a -> Type a
  TyVar :: [Char] -> Type a
  TyApp :: Type a -> [Type a] -> Type a
  TyFun :: Type a
  TyTuple :: Word8 -> Type a
  TyList :: Type a
  TyIO :: Type a
  TyUnit :: Type a
  TyChar :: Type a
  TyWord8 :: Type a
  TyWord16 :: Type a
  TyWord32 :: Type a
  TyWord64 :: Type a
  TyInt8 :: Type a
  TyInt16 :: Type a
  TyInt32 :: Type a
  TyInt64 :: Type a
  TyFloat :: Type a
  TyDouble :: Type a
  TyInteger :: Type a
*/

function TyDecl() {this.value=[arguments[0]];};
s.asCons(TyDecl,"TyDecl",0,function (bs,types) {return new TyDecl(types[0].decode(bs));});

function TyVar() {this.value=[s.string(arguments[0])];};
s.asCons(TyVar,"TyVar",1,function (bs,types) {return new TyVar(s.String.decode(bs));});

function TyApp() {this.value=[arguments[0],s.list(arguments[1])];};
s.asCons(TyApp,"TyApp",2,function (bs,types) {return new TyApp(new Type$(types[0]).decode(bs),new s.List$(new Type$(types[0])).decode(bs));});

function TyFun() {this.value=[];};
s.asCons(TyFun,"TyFun",3,function (bs,types) {return new TyFun();});

function TyTuple() {this.value=[s.word8(arguments[0])];};
s.asCons(TyTuple,"TyTuple",4,function (bs,types) {return new TyTuple(s.Word8.decode(bs));});

function TyList() {this.value=[];};
s.asCons(TyList,"TyList",5,function (bs,types) {return new TyList();});

function TyIO() {this.value=[];};
s.asCons(TyIO,"TyIO",6,function (bs,types) {return new TyIO();});

function TyUnit() {this.value=[];};
s.asCons(TyUnit,"TyUnit",7,function (bs,types) {return new TyUnit();});

function TyChar() {this.value=[];};
s.asCons(TyChar,"TyChar",8,function (bs,types) {return new TyChar();});

function TyWord8() {this.value=[];};
s.asCons(TyWord8,"TyWord8",9,function (bs,types) {return new TyWord8();});

function TyWord16() {this.value=[];};
s.asCons(TyWord16,"TyWord16",10,function (bs,types) {return new TyWord16();});

function TyWord32() {this.value=[];};
s.asCons(TyWord32,"TyWord32",11,function (bs,types) {return new TyWord32();});

function TyWord64() {this.value=[];};
s.asCons(TyWord64,"TyWord64",12,function (bs,types) {return new TyWord64();});

function TyInt8() {this.value=[];};
s.asCons(TyInt8,"TyInt8",13,function (bs,types) {return new TyInt8();});

function TyInt16() {this.value=[];};
s.asCons(TyInt16,"TyInt16",14,function (bs,types) {return new TyInt16();});

function TyInt32() {this.value=[];};
s.asCons(TyInt32,"TyInt32",15,function (bs,types) {return new TyInt32();});

function TyInt64() {this.value=[];};
s.asCons(TyInt64,"TyInt64",16,function (bs,types) {return new TyInt64();});

function TyFloat() {this.value=[];};
s.asCons(TyFloat,"TyFloat",17,function (bs,types) {return new TyFloat();});

function TyDouble() {this.value=[];};
s.asCons(TyDouble,"TyDouble",18,function (bs,types) {return new TyDouble();});

function TyInteger() {this.value=[];};
s.asCons(TyInteger,"TyInteger",19,function (bs,types) {return new TyInteger();});


function Type$() {this.value=[arguments[0]];};
s.asType(Type$,"Type$",[TyDecl,TyVar,TyApp,TyFun,TyTuple,TyList,TyIO,TyUnit,TyChar,TyWord8,TyWord16,TyWord32,TyWord64,TyInt8,TyInt16,TyInt32,TyInt64,TyFloat,TyDouble,TyInteger]);



return s.defs("Service.Org.Quid2.Language.QQ.Hash_04e43b1a91a8b7b5477456786d620c53021925bb70f5bade5fc89523f5908369",{},{Type$:Type$,TyDecl:TyDecl,TyVar:TyVar,TyApp:TyApp,TyFun:TyFun,TyTuple:TyTuple,TyList:TyList,TyIO:TyIO,TyUnit:TyUnit,TyChar:TyChar,TyWord8:TyWord8,TyWord16:TyWord16,TyWord32:TyWord32,TyWord64:TyWord64,TyInt8:TyInt8,TyInt16:TyInt16,TyInt32:TyInt32,TyInt64:TyInt64,TyFloat:TyFloat,TyDouble:TyDouble,TyInteger:TyInteger});
})();
