
// enums - define set of named constants
// helps avoid magic numbers
enum Compare {
    LESS_THAN = -1,
    BIGGER_THAN = 1,
    EQUALS = 0
}

function compare(a : MyObject, b: MyObject): number {
    if(a.age === b.age) {
        return Compare.EQUALS;
    }
    return a.age > b.age ? Compare.BIGGER_THAN : Compare.LESS_THAN;
}

// type aliases
type UserID = string; // giving a name to a string
type User = {
    id: UserID;
    name: string;
}

