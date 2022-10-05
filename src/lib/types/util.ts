export type Maybe<T> = T | undefined;

export type StyleDict<Key extends string = string, Prefix extends string = string> = Record<Key, `${Prefix}-${Key}`>;
