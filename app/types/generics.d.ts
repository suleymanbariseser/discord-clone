export type WithSerializedTypes<Type> = {
    [Key in keyof Type]: Type[Key] extends Date
      ? string
      : Type[Key] extends Date | null
      ? string | null
      : Type[Key] extends Date | undefined
      ? string | undefined
      : Type[Key] extends Date | null | undefined
      ? string | null | undefined
      : Type[Key] extends BigInt
      ? number
      : Type[Key] extends BigInt | null
      ? number | null
      : Type[Key] extends BigInt | undefined
      ? number | undefined
      : Type[Key] extends BigInt | null | undefined
      ? number | null | undefined
      : Type[Key];
  };