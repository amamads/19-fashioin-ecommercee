
export interface PropsWithClassName {
  className?: string;
}
export interface PropsWithOpen {
  open?: boolean;
}

export type ToFormState<T> = {
  errors: {
    _form?: string[];
  } & Partial<{
    [k in keyof T]: string[] | undefined;
  }>;
  values?: Partial<T>;
};
