import { createContext } from "react";

import {
  Queries,
  QueryStates,
  QueryInput,
  Option,
  QueryStateInput,
} from "src/types/index";

const defaultQueries: Queries = new Map([
  [
    new Date(),
    {
      instructors: [],
      quarters: [],
      years: [],
      departments: [],
      courseCode: [],
      classCode: [],
    },
  ],
]);

const defaultStates: QueryStates = new Map([
  [
    new Date(),
    {
      loading: false,
    },
  ],
]);

export const QueriesContext = createContext({
  queries: defaultQueries,
  states: defaultStates,
  updateQuery: (queryId: any, inputField: QueryInput, value: Option[]) => {},
  updateQueryState: (
    queryId: any,
    inputField: QueryStateInput,
    value: boolean
  ) => {},
  addQuery: () => {},
  removeQuery: (queryId: any) => {},
  selectedQuery: defaultQueries.keys().next().value,
  setSelectedQuery: (queryId: any) => {},
});
