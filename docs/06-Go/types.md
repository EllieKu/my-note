# Types

```
Type      = TypeName | TypeLit | "(" Type ")" .
TypeName  = identifier | QualifiedIdent .
TypeLit   = ArrayType | StructType | PointerType | FunctionType | InterfaceType |
	        SliceType | MapType | ChannelType .
```

**underlying type(底層類型):** 如果T是boolean, numeric, string, type literal 