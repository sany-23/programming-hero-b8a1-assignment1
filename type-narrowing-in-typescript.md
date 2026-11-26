# WWhat are the core differences between `type` aliases and `interface` in TypeScript? When should you choose one over the other?

TypeScript provides two primary constructs for defining custom object shapes and contracts: `type` aliases and 
`interface` declarations. While both describe the structure of data and enforce compile-time type safety, they 
differ significantly in extensibility, expressiveness, and how the compiler resolves their definitions across a 
codebase.

The most notable structural difference is declaration merging. Multiple `interface` declarations sharing the same 
name within the same scope automatically merge their properties into a single unified definition, which makes 
interfaces indispensable when extending third-party library types or global objects. Conversely, declaring two type 
aliases with identical names triggers a duplicate identifier error. Furthermore, `interface` definitions are 
strictly limited to describing object shapes, function signatures, and class contracts, whereas `type` aliases can 
represent primitive aliases, union types, intersection types, tuples, and mapped types.

```typescript
// Interface supports declaration merging
interface User {
  id: number;
}
interface User {
  name: string;
}

// Type alias supports unions and tuples
type Status = "pending" | "active" | "archived";
type Coordinate = [number, number];
```

 In terms of composition, interfaces extend one another using the extends keyword, while type aliases combine 
 shapes using intersection operators ( `&` ). TypeScript also caches interface object types more efficiently during 
 type checking, producing cleaner and more readable compiler error messages compared to complex nested type aliases.

We choose `interface` as our default for public APIs, object models, and class contracts where declaration merging 
or inheritance might be needed. We use `type` aliases whenever we need unions, tuples, utility transformations, or 
complex conditional logic that interfaces cannot express.