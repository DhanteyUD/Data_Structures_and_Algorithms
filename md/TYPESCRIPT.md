## 1. What is a generic function in `typeScript`?

> A generic function is a function that creates reusables components that works with multiple types while maintaining type safety.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<number>(42)); // Output: 42
console.log(identity<string>("Hello")); // Output: "Hello"
```

## 2. What is `"As Const"` in typeScript?

> `as const` is a powerful feature in TypeScript that ensures immutability and narrows type inference to the most specific, literal types.

```typescript
const variable = value as const;
```

###### 1. Literal Types:

```typescript
// Without as const, TypeScript infers a general type:
const greeting = "hello"; // Type: string
```

```typescript
// With as const, TypeScript infers the exact literal type:
const greeting = "hello" as const; // Type: "hello"
```

###### 2. Arrays:

```typescript
// Without as const, TypeScript infers a general array type:
const numbers = [1, 2, 3]; // Type: number[]
```

```typescript
// With as const, TypeScript infers a read-only tuple with literal types:
const numbers = [1, 2, 3] as const; // Type: readonly [1, 2, 3]
```

###### 3. Objects:

```typescript
// Without as const, TypeScript infers a general object type:
const person = { name: "Alice", age: 30 }; // Type: { name: string; age: number; }
```

```typescript
// With as const, TypeScript infers a read-only object with literal types:
const person = { name: "Alice", age: 30 } as const; // Type: { readonly name: "Alice"; readonly age: 30; }
```