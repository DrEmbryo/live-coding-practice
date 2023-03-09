export const withTestId = (testId: string) =>
  import.meta.env.PROD ? null : testId;
