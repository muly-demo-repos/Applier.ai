import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CANDIDATE_TITLE_FIELD } from "./CandidateTitle";
import { JOBPOSITION_TITLE_FIELD } from "../jobPosition/JobPositionTitle";

export const CandidateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="domainExpertise" source="domainExpertise" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="resume" source="resume" />
        <TextField label="skills" source="skills" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="yearsOfExperience" source="yearsOfExperience" />
        <ReferenceManyField
          reference="Interview"
          target="candidateId"
          label="Interviews"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="candidate"
              source="candidate.id"
              reference="Candidate"
            >
              <TextField source={CANDIDATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="feedback" source="feedback" />
            <TextField label="ID" source="id" />
            <TextField label="interviewer" source="interviewer" />
            <ReferenceField
              label="jobPosition"
              source="jobposition.id"
              reference="JobPosition"
            >
              <TextField source={JOBPOSITION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
