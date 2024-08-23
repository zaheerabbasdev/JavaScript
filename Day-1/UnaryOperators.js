// Unary Operators

age = age + 1

// OR

age += 1

// OR

++ age // Pre-increment
age ++ // Post-increment



age = age - 1

// OR

age -= 1

// OR

-- age // Pre-decrement
age -- // Post-decrement


// Examples

let year = 2000;
undefined

year += 1
2001

year += 1
2002

year += 1
2003

year += 1
2004


//Increment
year ++
2004

year
2005

year++
2005

year
2006

//Decrement
year--
2006

year
2005

year--
2005

year
2004


// Example of Pre-increment (mean First change, then use)

let age = 10
undefined

let newAge = ++age
undefined

age
11

newAge
11


// Example of Post-increment (mean First Use, then change)

let age2 = 10
undefined

let newAge2 = age ++
undefined

age
11

newAge
10