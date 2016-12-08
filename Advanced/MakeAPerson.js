/*
 * Fill in the object constructor with the following methods below:
 * > getFirstName()
 * > getLastName()
 * > getFullName()
 * > setFirstName()
 * > setLastName()
 * > setFullName()
 *
 * The methods that take an argument must accept only one argument and it has to be a string.
 */

var Person = function(firstAndLast) {
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];
    fullName = firstName + ' ' + lastName;

    this.getFirstName = function() {
        return firstName;
    };
    this.getLastName = function() {
        return lastName;
    };
    this.getFullName = function() {
        return fullName;
    };
    this.setFirstName = function(first) {
        firstName = first;
        this.setFullName(firstName + ' ' + lastName);
    };
    this.setLastName = function(last) {
        lastName = last;
        this.setFullName(firstName + ' ' + lastName);

    };
    this.setFullName = function(firstAndLast) {
        fullName = firstAndLast;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();
