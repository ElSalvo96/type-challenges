// ============= Test Cases =============
import type { Equal, Expect } from './test-utils';

type cases = [
	Expect<Equal<TrimLeft<'str'>, 'str'>>,
	Expect<Equal<TrimLeft<' str'>, 'str'>>,
	Expect<Equal<TrimLeft<'     str'>, 'str'>>,
	Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
	Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
	Expect<Equal<TrimLeft<''>, ''>>,
	Expect<Equal<TrimLeft<' \n\t'>, ''>>
];

// ============= Your Code Here =============
type ToRemove = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${ToRemove}${infer middle}`
	? TrimLeft<middle>
	: S;
