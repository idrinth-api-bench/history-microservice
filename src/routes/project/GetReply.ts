interface GetReply {
  [route: string]: {
    [date: string]: {
      mean: number;
      average: number;
      stdev: number;
      errors: number;
    },
  },
}
export default GetReply;
