// function MyClass(publicField, privateField, protectedField) {
//   // Public Field
//   this.publicField = publicField;

//   // private Field (closure)
//   const _privateField = privateField;

//   // protected Field
//   const _protectedField = protectedField;

//   // public Method
//   this.publicMethod = function () {
//     return `Public Field: ${this.publicField}`;
//   };

//   // private Method
//   function _privateMethod() {
//     return `Private Field: ${_privateField}`;
//   }

//   // protected Method
//   function _protectedMethod() {
//     return `Protected Field: ${_protectedField}`;
//   }

//   // Method to access protected method
//   this.accessProtectedMethod = function () {
//     return _protectedMethod();
//   };
// }

// const myObj = new MyClass("public", "private", "protected")

// console.log(myObj.publicField);
// console.log(myObj.privateField);
// console.log(myObj.protectedField);

// console.log(myObj.publicMethod());
// console.log(myObj._privateMethod());
// console.log(myObj._protectedMethod());
// console.log(myObj.accessProtectedMethod());